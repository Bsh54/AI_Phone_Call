// ===== CONFIGURATION ET VARIABLES GLOBALES =====
const API_CONFIG = {
    TTS_API: 'https://librettts-api.shadobsh.workers.dev',
    AI_API: 'https://shads229-personnal-aiv2.hf.space/v1/chat/completions',
    AI_TOKEN: 'Shadobsh'
};

// État global de la conversation IA
let conversationState = {
    isRecording: false,        // En cours d'enregistrement
    isProcessing: false,       // En cours de traitement
    isSpeaking: false,         // IA en train de parler
    isCallActive: false,       // Appel actif
    history: [],               // Historique des messages
    currentTranscript: '',     // Transcription actuelle
    callStartTime: null,       // Heure de début d'appel
    callTimer: null,           // Timer d'appel
    recognition: null,         // Objet reconnaissance vocale
    currentAudio: null,        // Audio en cours de lecture
    selectedVoice: null,       // Voix sélectionnée
    speechSpeed: 1.0,          // Vitesse de parole
    volume: 1.0                // Volume audio
};

// Configuration des voix disponibles
let availableVoices = {};

// ===== INITIALISATION =====
$(document).ready(function() {
    initializeApp();
});

async function initializeApp() {
    try {
        // Charger les voix disponibles
        await loadVoices();

        // Vérifier que les voix sont bien chargées
        if (Object.keys(availableVoices).length === 0) {
            throw new Error('Aucune voix disponible');
        }

        // Initialiser la reconnaissance vocale
        initializeSpeechRecognition();

        // Configurer les événements
        setupEventListeners();

        // Initialiser les contrôles audio
        initializeAudioControls();

    } catch (error) {
        console.error('Erreur d\'initialisation:', error);
        showToast('Erreur lors de l\'initialisation. Veuillez actualiser la page.', 'error');
    }
}

// ===== GESTION DES VOIX =====
async function loadVoices() {
    try {
        console.log('Chargement des voix...');
        const response = await fetch('speakers.json');

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Données reçues:', data);

        if (data && data['edge-api'] && data['edge-api'].speakers) {
            availableVoices = data['edge-api'].speakers;
            console.log('Voix disponibles:', availableVoices);
            updateVoiceSelect();
        } else {
            throw new Error('Format de données de voix invalide');
        }
    } catch (error) {
        console.error('Erreur lors du chargement des voix:', error);

        // Voix de secours : français France et anglais États-Unis seulement
        availableVoices = {
            'fr-FR-DeniseNeural': 'Denise - Français (France)',
            'fr-FR-HenriNeural': 'Henri - Français (France)',
            'en-US-JennyNeural': 'Jenny - Anglais (États-Unis)',
            'en-US-GuyNeural': 'Guy - Anglais (États-Unis)'
        };
        updateVoiceSelect();
    }
}

function updateVoiceSelect() {
    const voiceSelect = $('#voiceSelect');
    voiceSelect.empty();

    // Filtrer et organiser les voix : français France d'abord, puis anglais US seulement
    const organizedVoices = {};

    // 1. Ajouter les voix françaises de France en premier
    Object.keys(availableVoices).forEach(key => {
        if (key.startsWith('fr-FR-')) {
            organizedVoices[key] = availableVoices[key];
        }
    });

    // 2. Ajouter seulement les voix anglaises des États-Unis
    Object.keys(availableVoices).forEach(key => {
        if (key.startsWith('en-US-')) {
            organizedVoices[key] = availableVoices[key];
        }
    });

    // Ajouter les voix organisées au sélecteur
    Object.keys(organizedVoices).forEach(key => {
        voiceSelect.append(new Option(organizedVoices[key], key));
    });

    // Sélectionner la première voix française par défaut
    const frenchVoice = Object.keys(organizedVoices).find(key => key.includes('fr-FR'));
    if (frenchVoice) {
        voiceSelect.val(frenchVoice);
        conversationState.selectedVoice = frenchVoice;
    } else if (Object.keys(organizedVoices).length > 0) {
        // Si pas de voix française, prendre la première disponible
        const firstVoice = Object.keys(organizedVoices)[0];
        voiceSelect.val(firstVoice);
        conversationState.selectedVoice = firstVoice;
    }

    console.log('Voix sélectionnées:', Object.keys(organizedVoices).length);
    console.log('Voix française France:', Object.keys(organizedVoices).filter(k => k.startsWith('fr-FR-')).length);
    console.log('Voix anglaise US:', Object.keys(organizedVoices).filter(k => k.startsWith('en-US-')).length);
    console.log('Voix par défaut:', conversationState.selectedVoice);
}

// ===== RECONNAISSANCE VOCALE =====
function initializeSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('La reconnaissance vocale n\'est pas supportée par votre navigateur.', 'error');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    conversationState.recognition = new SpeechRecognition();

    // Configuration de la reconnaissance
    conversationState.recognition.continuous = true;
    conversationState.recognition.interimResults = true;
    conversationState.recognition.lang = 'fr-FR';

    // Événements de reconnaissance
    conversationState.recognition.onstart = function() {
        console.log('Reconnaissance vocale démarrée');
        updateCallStatus('listening');
        $('#transcriptLive').text('Parlez maintenant...');
    };

    conversationState.recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }

        // Afficher la transcription en temps réel
        const displayText = finalTranscript + interimTranscript;
        $('#transcriptLive').text(displayText || 'Parlez maintenant...');

        // Si on a une transcription finale, traiter le message
        if (finalTranscript.trim()) {
            conversationState.currentTranscript = finalTranscript.trim();
            processUserMessage(conversationState.currentTranscript);
        }
    };

    conversationState.recognition.onerror = function(event) {
        console.error('Erreur de reconnaissance vocale:', event.error);
        if (event.error === 'no-speech') {
            showToast('Aucune parole détectée. Essayez de parler plus fort.', 'warning');
        } else {
            showToast('Erreur de reconnaissance vocale: ' + event.error, 'error');
        }
        updateCallStatus('waiting');
    };

    conversationState.recognition.onend = function() {
        console.log('Reconnaissance vocale terminée');
        if (conversationState.isCallActive && conversationState.isRecording) {
            // Redémarrer automatiquement si l'appel est toujours actif
            setTimeout(() => {
                if (conversationState.isCallActive && !conversationState.isProcessing) {
                    startListening();
                }
            }, 1000);
        }
    };
}

// ===== GESTION DE L'APPEL =====
function setupEventListeners() {
    // Bouton pour démarrer l'appel
    $('#startCallBtn').on('click', startCall);

    // Bouton pour terminer l'appel
    $('#endCallBtn').on('click', endCall);

    // Contrôles audio
    $('#voiceSelect').on('change', function() {
        conversationState.selectedVoice = $(this).val();
        console.log('Voix sélectionnée:', conversationState.selectedVoice);
    });

    $('#speedControl').on('input', function() {
        conversationState.speechSpeed = parseFloat($(this).val());
        $('#speedValue').text(conversationState.speechSpeed + 'x');
    });

    $('#volumeControl').on('input', function() {
        conversationState.volume = parseInt($(this).val()) / 100;
        $('#volumeValue').text($(this).val() + '%');
    });
}

function startCall() {
    // Vérifier que les paramètres sont configurés
    if (!conversationState.selectedVoice) {
        showToast('Veuillez sélectionner une voix avant de démarrer l\'appel.', 'warning');
        return;
    }

    conversationState.isCallActive = true;
    conversationState.callStartTime = Date.now();

    // Masquer la section de configuration et afficher la section d'appel
    $('#setupSection').hide();
    $('#callSection').show();

    // Démarrer le timer d'appel
    startCallTimer();

    // Démarrer l'écoute
    startListening();

    showToast('Appel démarré ! Commencez à parler.', 'success');
}

function endCall() {
    conversationState.isCallActive = false;
    conversationState.isRecording = false;
    conversationState.isProcessing = false;
    conversationState.isSpeaking = false;

    // Arrêter la reconnaissance vocale
    if (conversationState.recognition) {
        conversationState.recognition.stop();
    }

    // Arrêter l'audio en cours
    if (conversationState.currentAudio) {
        conversationState.currentAudio.pause();
        conversationState.currentAudio = null;
    }

    // Arrêter le timer
    if (conversationState.callTimer) {
        clearInterval(conversationState.callTimer);
        conversationState.callTimer = null;
    }

    // Réinitialiser l'historique de conversation
    conversationState.history = [];
    $('#chatHistory').empty();

    // Masquer la section d'appel et afficher la section de configuration
    $('#callSection').hide();
    $('#setupSection').show();

    showToast('Appel terminé.', 'info');
}

function startCallTimer() {
    conversationState.callTimer = setInterval(() => {
        const elapsed = Date.now() - conversationState.callStartTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        $('#callTimer').text(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
}

// ===== GESTION DE L'ÉCOUTE =====
function startListening() {
    if (!conversationState.recognition || conversationState.isProcessing) {
        return;
    }

    conversationState.isRecording = true;
    updateCallStatus('listening');

    try {
        conversationState.recognition.start();
    } catch (error) {
        console.error('Erreur lors du démarrage de la reconnaissance:', error);
        showToast('Impossible de démarrer la reconnaissance vocale.', 'error');
    }
}

function stopListening() {
    conversationState.isRecording = false;
    if (conversationState.recognition) {
        conversationState.recognition.stop();
    }
}

// ===== TRAITEMENT DES MESSAGES =====
async function processUserMessage(message) {
    if (!message.trim() || conversationState.isProcessing) {
        return;
    }

    conversationState.isProcessing = true;
    updateCallStatus('processing');

    // Arrêter l'écoute temporairement
    stopListening();

    // Ajouter le message utilisateur à l'historique
    addMessageToHistory('user', message);

    // Effacer la transcription en cours
    $('#transcriptLive').text('Traitement en cours...');

    try {
        // Envoyer à l'IA
        const aiResponse = await sendToAI(message);

        // Ajouter la réponse IA à l'historique
        addMessageToHistory('ai', aiResponse);

        // Synthétiser et lire la réponse
        await speakResponse(aiResponse);

    } catch (error) {
        console.error('Erreur lors du traitement du message:', error);
        showToast('Erreur lors du traitement de votre message.', 'error');

        // Réponse d'erreur
        const errorResponse = "Désolé, j'ai rencontré un problème technique. Pouvez-vous répéter votre question ?";
        addMessageToHistory('ai', errorResponse);
        await speakResponse(errorResponse);
    }

    conversationState.isProcessing = false;

    // Reprendre l'écoute si l'appel est toujours actif
    if (conversationState.isCallActive) {
        setTimeout(() => {
            updateCallStatus('listening');
            $('#transcriptLive').text('Parlez maintenant...');
            startListening();
        }, 1000);
    }
}

// ===== INTÉGRATION IA (DEEPSEEK) =====
async function sendToAI(userMessage) {
    // Préparer l'historique de conversation pour l'IA
    const messages = [
        {
            role: 'system',
            content: 'Tu es un assistant IA amical et serviable dans une conversation téléphonique. Réponds de manière naturelle et conversationnelle, comme si tu parlais au téléphone. Garde tes réponses relativement courtes et engageantes. Réponds en français.'
        }
    ];

    // Ajouter l'historique récent (derniers 10 messages)
    const recentHistory = conversationState.history.slice(-10);
    recentHistory.forEach(msg => {
        messages.push({
            role: msg.type === 'user' ? 'user' : 'assistant',
            content: msg.content
        });
    });

    // Ajouter le message actuel
    messages.push({
        role: 'user',
        content: userMessage
    });

    const response = await fetch(API_CONFIG.AI_API, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_CONFIG.AI_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'deepseek-chat',
            messages: messages,
            max_tokens: 500,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        throw new Error(`Erreur API IA: ${response.status}`);
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Réponse IA invalide');
    }

    return data.choices[0].message.content.trim();
}

// ===== SYNTHÈSE VOCALE =====
async function speakResponse(text) {
    if (!text.trim() || !conversationState.selectedVoice) {
        return;
    }

    conversationState.isSpeaking = true;
    updateCallStatus('speaking');

    try {
        const response = await fetch(API_CONFIG.TTS_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                voice: conversationState.selectedVoice,
                rate: Math.round((conversationState.speechSpeed - 1) * 100), // Convertir en format Edge API
                pitch: 0
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur API TTS: ${response.status}`);
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);

        // Créer et configurer l'élément audio
        const audio = new Audio(audioUrl);
        audio.volume = conversationState.volume;
        conversationState.currentAudio = audio;

        // Événements audio
        audio.onended = function() {
            conversationState.isSpeaking = false;
            URL.revokeObjectURL(audioUrl);
            conversationState.currentAudio = null;
        };

        audio.onerror = function() {
            console.error('Erreur lors de la lecture audio');
            conversationState.isSpeaking = false;
            conversationState.currentAudio = null;
        };

        // Lire l'audio
        await audio.play();

    } catch (error) {
        console.error('Erreur lors de la synthèse vocale:', error);
        conversationState.isSpeaking = false;
        showToast('Erreur lors de la synthèse vocale.', 'error');
    }
}

// ===== GESTION DE L'HISTORIQUE =====
function addMessageToHistory(type, content) {
    const message = {
        type: type,
        content: content,
        timestamp: Date.now()
    };

    conversationState.history.push(message);

    // Limiter l'historique à 50 messages
    if (conversationState.history.length > 50) {
        conversationState.history = conversationState.history.slice(-50);
    }

    // Ajouter à l'interface
    addMessageToUI(type, content);
}

function addMessageToUI(type, content) {
    const chatHistory = $('#chatHistory');
    const isUser = type === 'user';

    const messageHtml = `
        <div class="chat-message ${isUser ? 'user-message' : ''}">
            <div class="${isUser ? 'user-avatar' : 'ai-avatar'}">
                ${isUser ? '👤' : '🤖'}
            </div>
            <div class="message-content">
                <strong>${isUser ? 'Vous' : 'Assistant IA'}</strong>
                <p>${escapeHtml(content)}</p>
            </div>
        </div>
    `;

    chatHistory.append(messageHtml);

    // Faire défiler vers le bas
    chatHistory.scrollTop(chatHistory[0].scrollHeight);
}

// ===== GESTION DES ÉTATS VISUELS =====
function updateCallStatus(status) {
    // Réinitialiser tous les indicateurs
    $('.indicator').removeClass('active');
    $('.status-indicator').removeClass('listening processing speaking');

    // Mettre à jour selon le statut
    switch (status) {
        case 'listening':
            $('#callStatusText').text('En écoute');
            $('.status-indicator').addClass('listening');
            $('#listeningIndicator').addClass('active');
            $('#transcriptLive').addClass('recording');
            break;

        case 'processing':
            $('#callStatusText').text('Traitement');
            $('.status-indicator').addClass('processing');
            $('#processingIndicator').addClass('active');
            $('#transcriptLive').removeClass('recording');
            $('.phone-container').addClass('call-processing');
            $('#callButton').addClass('processing');
            break;

        case 'speaking':
            $('#callStatusText').text('IA parle');
            $('.status-indicator').addClass('speaking');
            $('#speakingIndicator').addClass('active');
            $('#transcriptLive').removeClass('recording');
            $('.phone-container').removeClass('call-processing');
            $('#callButton').removeClass('processing');
            break;

        case 'waiting':
        default:
            $('#callStatusText').text('En attente');
            $('#transcriptLive').removeClass('recording');
            $('.phone-container').removeClass('call-processing');
            $('#callButton').removeClass('processing');
            break;
    }
}

// ===== CONTRÔLES AUDIO =====
function initializeAudioControls() {
    // Initialiser les valeurs par défaut
    $('#speedControl').val(conversationState.speechSpeed);
    $('#speedValue').text(conversationState.speechSpeed + 'x');
    $('#volumeControl').val(conversationState.volume * 100);
    $('#volumeValue').text((conversationState.volume * 100) + '%');
}

// ===== NOTIFICATIONS TOAST =====
function showToast(message, type = 'info', duration = 4000) {
    const toastContainer = $('#toastContainer');
    const toastId = 'toast-' + Date.now();

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };

    const toastHtml = `
        <div class="toast ${type}" id="${toastId}">
            <div class="toast-content">
                <i class="fas ${icons[type]} toast-icon"></i>
                <div class="toast-message">${escapeHtml(message)}</div>
            </div>
        </div>
    `;

    toastContainer.append(toastHtml);

    // Animation d'entrée
    setTimeout(() => {
        $(`#${toastId}`).addClass('show');
    }, 100);

    // Suppression automatique
    setTimeout(() => {
        $(`#${toastId}`).removeClass('show');
        setTimeout(() => {
            $(`#${toastId}`).remove();
        }, 300);
    }, duration);
}

// ===== UTILITAIRES =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== GESTION DES ERREURS GLOBALES =====
window.addEventListener('error', function(event) {
    console.error('Erreur globale:', event.error);
    showToast('Une erreur inattendue s\'est produite.', 'error');
});

// ===== NETTOYAGE À LA FERMETURE =====
window.addEventListener('beforeunload', function() {
    if (conversationState.isCallActive) {
        endCall();
    }
});

// ===== FONCTIONS DE DÉBOGAGE (DÉVELOPPEMENT) =====
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugConversation = function() {
        console.log('État de la conversation:', conversationState);
        console.log('Historique:', conversationState.history);
    };

    window.testTTS = async function(text = "Ceci est un test de synthèse vocale.") {
        await speakResponse(text);
    };

    window.testAI = async function(message = "Bonjour, comment allez-vous ?") {
        try {
            const response = await sendToAI(message);
            console.log('Réponse IA:', response);
            return response;
        } catch (error) {
            console.error('Erreur test IA:', error);
        }
    };
}