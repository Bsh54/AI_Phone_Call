<div align="center">

# 🎙️ Interface d'Appel Téléphonique IA

**Transformez la synthèse vocale en conversations naturelles avec l'IA**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Web Speech API](https://img.shields.io/badge/Web%20Speech%20API-4285F4?logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

[🚀 Démo en Direct](https://bsh54.github.io/AI_Phone_Call/) • [📖 Documentation](https://github.com/Bsh54/AI_Phone_Call/wiki) • [🐛 Signaler un Bug](https://github.com/Bsh54/AI_Phone_Call/issues) • [✨ Demander une Fonctionnalité](https://github.com/Bsh54/AI_Phone_Call/issues)

</div>

---

## ✨ Fonctionnalités

### 🎯 **Fonctionnalités Principales**
- 🗣️ **Reconnaissance Vocale en Temps Réel** - Parlez naturellement grâce à l'API Web Speech
- 🤖 **Conversations IA** - Alimenté par DeepSeek AI pour des réponses intelligentes
- 🔊 **Synthèse Vocale Naturelle** - Synthèse vocale de haute qualité avec plusieurs voix
- 📱 **Simulation d'Appel Téléphonique** - Interface d'appel authentique avec minuteur et statut

### 🎨 **Design Premium**
- 🌈 **Gradients Vibrants** - Interface moderne avec des schémas de couleurs dynamiques
- ✨ **Effets Glassmorphism** - Effets de transparence et de flou élégants
- 📱 **Design Mobile-First** - Interface responsive optimisée pour tous les appareils
- 🎭 **Animations Fluides** - Transitions fluides et micro-interactions

### 🔧 **Excellence Technique**
- ⚡ **Zéro Dépendance** - JavaScript pur, aucun framework requis
- 🛡️ **Sécurité Prioritaire** - Gestion sécurisée des API et protection des données
- 🌐 **Multi-Navigateurs** - Compatible avec les navigateurs modernes
- 🎛️ **Personnalisable** - Configuration facile et sélection de voix

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

### 1. **Configurez Votre Appel**
- 🎤 Sélectionnez votre voix préférée (français ou anglais)
- ⚡ Ajustez la vitesse de parole (0.5x - 2.0x)
- 🔊 Définissez le niveau de volume (0% - 100%)

### 2. **Démarrez la Conversation**
- 📞 Cliquez sur "Démarrer l'appel" pour commencer
- 🎙️ Parlez naturellement quand vous y êtes invité
- 👀 Regardez la transcription en temps réel

### 3. **Profitez du Chat IA Naturel**
- 🤖 L'IA répond automatiquement avec la voix
- 💬 Visualisez l'historique de conversation
- ⏱️ Surveillez la durée de l'appel

### 4. **Terminez Quand Vous le Souhaitez**
- 📴 Cliquez sur "Terminer l'appel" pour finir
- 🔄 Retournez à la configuration pour le prochain appel

---

## 🏗️ Architecture

```
Entrée Vocale Utilisateur → API Web Speech → Transcription Temps Réel → API DeepSeek IA → Texte Réponse IA → API TTS → Synthèse Audio → Lecture Automatique → Continuer la Conversation
```

### 🔧 **Stack Technique**

| Composant | Technologie | Objectif |
|-----------|------------|----------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ | Interface utilisateur et interactions |
| **Reconnaissance Vocale** | API Web Speech | Conversion parole-texte en temps réel |
| **Traitement IA** | API DeepSeek | Réponses de conversation intelligentes |
| **Synthèse Vocale** | API Edge TTS | Synthèse vocale de haute qualité |
| **Stylisation** | CSS Grid, Flexbox, Gradients | Design responsive moderne |

---

## 🎨 Personnalisation

### Sélection de Voix

L'interface supporte plusieurs options de voix :

```javascript
// Voix disponibles (filtrées pour la qualité)
const voices = {
    'fr-FR-DeniseNeural': 'Denise - Français (France)',
    'fr-FR-HenriNeural': 'Henri - Français (France)',
    'en-US-JennyNeural': 'Jenny - Anglais (États-Unis)',
    'en-US-GuyNeural': 'Guy - Anglais (États-Unis)'
};
```

### Thèmes de Style

Personnalisez les thèmes de gradient dans `style.css` :

```css
:root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

---

## 🛡️ Sécurité

Ce projet implémente plusieurs mesures de sécurité :

- 🔐 **Communication API Sécurisée** - Appels API HTTPS uniquement
- 🛡️ **Assainissement des Entrées** - Protection XSS pour toutes les entrées utilisateur
- 🎤 **Protection de la Vie Privée** - Aucun stockage permanent des données vocales
- 🔒 **Sécurité des Tokens** - Gestion sécurisée des tokens API

Pour des informations détaillées sur la sécurité, voir [SECURITY.md](SECURITY.md).

---

## 🤝 Contribuer

Nous accueillons les contributions ! Voici comment vous pouvez aider :

### 🐛 **Rapports de Bugs**
- Utilisez le [suivi des problèmes](https://github.com/Bsh54/AI_Phone_Call/issues)
- Incluez la version du navigateur et les étapes pour reproduire
- Fournissez les messages d'erreur de la console si disponibles

### ✨ **Demandes de Fonctionnalités**
- Décrivez la fonctionnalité et ses avantages
- Incluez des maquettes ou des exemples si possible
- Expliquez le cas d'usage

### 🔧 **Pull Requests**
1. Forkez le dépôt
2. Créez une branche de fonctionnalité (`git checkout -b feature/fonctionnalite-incroyable`)
3. Commitez vos changements (`git commit -m 'Ajouter fonctionnalité incroyable'`)
4. Poussez vers la branche (`git push origin feature/fonctionnalite-incroyable`)
5. Ouvrez une Pull Request

---

## 📊 Support Navigateurs

| Navigateur | Version | Statut |
|------------|---------|--------|
| Chrome | 25+ | ✅ Support Complet |
| Firefox | 44+ | ✅ Support Complet |
| Safari | 14.1+ | ✅ Support Complet |
| Edge | 79+ | ✅ Support Complet |

**Note** : L'API Web Speech nécessite HTTPS en environnement de production.

---

## 📁 Structure du Projet

```
ai-phone-call/
├── index.html              # Interface principale
├── script.js               # Logique JavaScript principale
├── style.css               # Stylisation premium
├── speakers.json           # Configurations des voix
├── image/                  # Assets et icônes
├── cloudflare-workers/     # Backend API TTS
│   ├── index.js           # Script worker
│   ├── wrangler.toml      # Configuration
│   └── README.md          # Documentation API
├── SECURITY.md            # Directives de sécurité
├── .gitignore             # Règles d'ignore Git
└── README.md              # Ce fichier
```

---

## 🔧 Configuration API

### API DeepSeek IA
```javascript
const AI_CONFIG = {
    endpoint: 'https://shads229-personnal-aiv2.hf.space/v1/chat/completions',
    model: 'deepseek-chat',
    maxTokens: 500,
    temperature: 0.7
};
```

### API TTS (Cloudflare Workers)
```javascript
const TTS_CONFIG = {
    endpoint: 'https://librettts-api.shadobsh.workers.dev',
    voixSupportees: ['fr-FR-DeniseNeural', 'fr-FR-HenriNeural', 'en-US-JennyNeural', 'en-US-GuyNeural'],
    plageVitesse: [-100, 100],
    plageTonalite: [-100, 100]
};
```

---

## 🚀 Déploiement

### Déploiement Frontend

**Vercel**
```bash
npm i -g vercel
vercel --prod
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```

**GitHub Pages**
1. Poussez vers le dépôt GitHub
2. Activez GitHub Pages dans les paramètres du dépôt
3. Sélectionnez la branche source (main/master)

### API Backend (Cloudflare Workers)

```bash
cd cloudflare-workers
npm install -g wrangler
wrangler login
wrangler deploy
```

---

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- **API Web Speech** - Pour permettre la reconnaissance vocale
- **DeepSeek IA** - Pour les capacités de conversation intelligente
- **Microsoft Edge TTS** - Pour la synthèse vocale de haute qualité
- **Bootstrap** - Pour les composants de design responsive

---

## 📞 Support

Besoin d'aide ? Nous sommes là pour vous !

- 📧 **Email** : shadrakbsh@gmail.com
- 💬 **Discussions GitHub** : [Rejoignez notre communauté](https://github.com/Bsh54/AI_Phone_Call/discussions)
- 📖 **Documentation** : [Documentation complète](https://github.com/Bsh54/AI_Phone_Call/wiki)
- 🐛 **Problèmes** : [GitHub Issues](https://github.com/Bsh54/AI_Phone_Call/issues)

---

<div align="center">

**Fait avec ❤️ pour l'avenir de l'interaction humain-IA**

[⭐ Étoiler ce dépôt](https://github.com/Bsh54/AI_Phone_Call) • [🍴 Le forker](https://github.com/Bsh54/AI_Phone_Call/fork) • [📢 Le partager](https://twitter.com/intent/tweet?text=Découvrez%20cette%20incroyable%20interface%20d'appel%20téléphonique%20IA%20!%20https://github.com/Bsh54/AI_Phone_Call)

</div>