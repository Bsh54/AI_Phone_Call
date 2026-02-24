<div align="center">

# 🎙️ Conversation Vocale IA

**Conversez naturellement avec l'intelligence artificielle par la voix**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Web Speech API](https://img.shields.io/badge/Web%20Speech%20API-4285F4?logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

[🚀 Démo en Direct](https://bsh54.github.io/AI_Phone_Call/) • [📖 Documentation](https://github.com/Bsh54/AI_Phone_Call/wiki) • [🐛 Signaler un Bug](https://github.com/Bsh54/AI_Phone_Call/issues) • [✨ Demander une Fonctionnalité](https://github.com/Bsh54/AI_Phone_Call/issues)

</div>

---

## ✨ Fonctionnalités

### 🎯 **Conversation Vocale Naturelle**
- 🗣️ **Reconnaissance Vocale Continue** - Parlez naturellement, l'IA vous écoute
- 🎛️ **Contrôle Total** - Démarrez, mettez en pause, continuez ou envoyez quand vous voulez
- 🤖 **IA Conversationnelle** - Réponses intelligentes via DeepSeek AI
- 🔊 **Synthèse Vocale Automatique** - L'IA vous répond avec une voix naturelle

### 🎨 **Interface Épurée Premium**
- 🌈 **Design Moderne** - Gradients vibrants et animations fluides
- 🎭 **Indicateurs Visuels** - États clairs : Écoute → Traitement → IA parle
- 📱 **Mobile-First** - Interface responsive optimisée pour tous les appareils
- ✨ **Expérience Intuitive** - Pas de transcription visible, focus sur la conversation

### 🔧 **Contrôle Avancé**
- ⏸️ **Pause/Reprise** - Interrompez et reprenez votre message à tout moment
- 🎚️ **Paramètres Personnalisés** - Voix, vitesse et volume ajustables
- 🔄 **Workflow Maîtrisé** - Vous décidez quand envoyer votre message à l'IA
- 🛡️ **Sécurité Intégrée** - Aucune donnée vocale stockée de façon permanente

---

## 🚀 Démarrage Rapide

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Connexion HTTPS (requise pour l'API Web Speech)
- Autorisation d'accès au microphone

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Bsh54/AI_Phone_Call.git
   cd AI_Phone_Call
   ```

2. **Démarrer un serveur local**
   ```bash
   # Avec Python
   python -m http.server 8000

   # Avec Node.js
   npx serve .

   # Avec PHP
   php -S localhost:8000
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:8000
   ```

### Configuration

Mettez à jour la configuration API dans `script.js` :

```javascript
const API_CONFIG = {
    TTS_API: 'votre-endpoint-tts',
    AI_API: 'votre-endpoint-ia',
    AI_TOKEN: 'votre-token-api'
};
```

---

## 🎮 Comment Utiliser

### 1. **Configurez Votre Conversation**
- 🎤 Choisissez la voix de l'IA (français ou anglais)
- ⚡ Ajustez la vitesse de parole (0.5x - 2.0x)
- 🔊 Réglez le volume (0% - 100%)
- 📞 Cliquez sur "Converser avec l'IA"

### 2. **Démarrez Votre Message**
- 🎙️ Cliquez sur "Parler" pour commencer l'enregistrement
- 🗣️ Parlez naturellement (la transcription se fait en arrière-plan)
- ⏸️ Utilisez "Pause" pour interrompre temporairement
- ▶️ Cliquez "Continuer" pour reprendre votre message

### 3. **Envoyez à l'IA**
- 📤 Cliquez "Envoyer" quand votre message est complet
- 🧠 L'IA traite votre message (indicateur visuel)
- 🔊 Écoutez la réponse vocale automatique
- 🔄 Recommencez pour continuer la conversation

### 4. **Terminez Quand Vous Voulez**
- ❌ Cliquez sur la croix pour terminer la conversation
- 🔄 Retournez aux paramètres pour une nouvelle session

---

## 🏗️ Architecture Technique

```
Parole Utilisateur → Web Speech API → Transcription Silencieuse → Contrôle Utilisateur → DeepSeek IA → Synthèse Vocale → Lecture Automatique → Nouvelle Interaction
```

### 🔧 **Stack Technique**

| Composant | Technologie | Rôle |
|-----------|------------|------|
| **Interface** | HTML5, CSS3, JavaScript ES6+ | Contrôles vocaux et interface utilisateur |
| **Reconnaissance** | Web Speech API | Conversion parole-texte en arrière-plan |
| **Intelligence** | DeepSeek API | Génération de réponses conversationnelles |
| **Synthèse** | Edge TTS API | Conversion texte-parole de qualité |
| **Design** | CSS Gradients, Animations | Interface premium responsive |

---

## 🎨 Workflow de Conversation

### **États Visuels**
1. **🎤 Écoute** - Microphone actif, transcription en cours
2. **⏸️ Pause** - Message en attente, possibilité de continuer
3. **🧠 Traitement** - IA analyse votre message
4. **🔊 IA Parle** - Lecture automatique de la réponse
5. **✅ Prêt** - En attente de votre prochaine intervention

### **Contrôles Disponibles**
- **Parler/Arrêter** - Démarrer ou stopper l'enregistrement
- **Pause** - Suspendre temporairement l'enregistrement
- **Continuer** - Reprendre après une pause
- **Envoyer** - Transmettre le message à l'IA
- **Terminer** - Finir la conversation

---

## 🎛️ Personnalisation

### Voix Disponibles

```javascript
// Voix sélectionnées pour la qualité
const voices = {
    'fr-FR-DeniseNeural': 'Denise - Français (France)',
    'fr-FR-HenriNeural': 'Henri - Français (France)',
    'en-US-JennyNeural': 'Jenny - Anglais (États-Unis)',
    'en-US-GuyNeural': 'Guy - Anglais (États-Unis)'
};
```

### Paramètres Ajustables

```javascript
// Configuration utilisateur
const userSettings = {
    speechSpeed: 1.0,    // Vitesse de 0.5x à 2.0x
    volume: 1.0,         // Volume de 0% à 100%
    selectedVoice: 'fr-FR-DeniseNeural'  // Voix par défaut
};
```

---

## 🛡️ Sécurité et Confidentialité

### **Protection des Données**
- 🔐 **Aucun Stockage Permanent** - Les données vocales ne sont jamais sauvegardées
- 🛡️ **Transcription Temporaire** - Effacée après chaque envoi à l'IA
- 🔒 **Communications Sécurisées** - HTTPS obligatoire pour toutes les APIs
- 🎤 **Contrôle Microphone** - Autorisation explicite requise

### **Sécurité Technique**
- ✅ **Validation des Entrées** - Protection contre les injections
- ✅ **Gestion Mémoire** - Nettoyage automatique des ressources audio
- ✅ **Gestion d'Erreurs** - Récupération gracieuse en cas de problème
- ✅ **APIs Sécurisées** - Authentification par tokens

Pour plus de détails, voir [SECURITY.md](SECURITY.md).

---

## 🤝 Contribuer

### 🐛 **Signaler un Bug**
- Utilisez le [système d'issues](https://github.com/Bsh54/AI_Phone_Call/issues)
- Précisez votre navigateur et les étapes pour reproduire
- Incluez les messages d'erreur de la console

### ✨ **Proposer une Amélioration**
- Décrivez clairement la fonctionnalité souhaitée
- Expliquez le cas d'usage et les bénéfices
- Proposez une implémentation si possible

### 🔧 **Contribuer au Code**
1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commitez vos changements (`git commit -m 'Ajouter amélioration'`)
4. Poussez la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

---

## 📊 Compatibilité Navigateurs

| Navigateur | Version | Support Web Speech API | Statut |
|------------|---------|----------------------|--------|
| Chrome | 25+ | ✅ Complet | ✅ Recommandé |
| Firefox | 44+ | ✅ Complet | ✅ Supporté |
| Safari | 14.1+ | ⚠️ Partiel | ⚠️ Limité |
| Edge | 79+ | ✅ Complet | ✅ Supporté |

**Note** : HTTPS requis en production pour l'accès microphone.

---

## 📁 Structure du Projet

```
conversation-vocale-ia/
├── index.html              # Interface principale
├── script.js               # Logique de conversation vocale
├── style.css               # Design premium avec gradients
├── speakers.json           # Configuration des voix TTS
├── image/                  # Ressources visuelles
├── cloudflare-workers/     # API TTS backend
│   ├── index.js           # Worker Cloudflare
│   ├── wrangler.toml      # Configuration déploiement
│   └── README.md          # Documentation API
├── SECURITY.md            # Politique de sécurité
├── CONTRIBUTING.md        # Guide de contribution
├── CHANGELOG.md           # Historique des versions
└── README.md              # Ce fichier
```

---

## 🚀 Déploiement

### **GitHub Pages (Recommandé)**
1. Activez GitHub Pages dans les paramètres du repository
2. Sélectionnez la branche `master` comme source
3. Votre site sera disponible à `https://bsh54.github.io/AI_Phone_Call/`

### **Autres Plateformes**

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```

**Vercel**
```bash
npm i -g vercel
vercel --prod
```

**Cloudflare Pages**
1. Connectez votre repository GitHub
2. Configurez le build (aucune commande nécessaire)
3. Déployez automatiquement

---

## 📝 Licence

Ce projet est sous licence MIT - voir [LICENSE](LICENSE) pour les détails.

---

## 🙏 Remerciements

- **Web Speech API** - Reconnaissance vocale native du navigateur
- **DeepSeek AI** - Intelligence conversationnelle avancée
- **Microsoft Edge TTS** - Synthèse vocale de haute qualité
- **Communauté Open Source** - Inspiration et support continu

---

## 📞 Support et Contact

Besoin d'aide ou de suggestions ?

- 📧 **Email** : shadrakbsh@gmail.com
- 💬 **Discussions** : [GitHub Discussions](https://github.com/Bsh54/AI_Phone_Call/discussions)
- 📖 **Wiki** : [Documentation complète](https://github.com/Bsh54/AI_Phone_Call/wiki)
- 🐛 **Issues** : [Signaler un problème](https://github.com/Bsh54/AI_Phone_Call/issues)

---

<div align="center">

**Créé avec ❤️ pour des conversations naturelles avec l'IA**

[⭐ Étoiler ce projet](https://github.com/Bsh54/AI_Phone_Call) • [🍴 Fork](https://github.com/Bsh54/AI_Phone_Call/fork) • [📢 Partager](https://twitter.com/intent/tweet?text=Découvrez%20cette%20interface%20de%20conversation%20vocale%20IA%20!%20https://github.com/Bsh54/AI_Phone_Call)

</div>