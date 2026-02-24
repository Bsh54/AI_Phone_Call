<div align="center">

# 🎙️ AI Phone Call Interface

**Transform text-to-speech into natural AI conversations**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Web Speech API](https://img.shields.io/badge/Web%20Speech%20API-4285F4?logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

[🚀 Live Demo](https://bsh54.github.io/AI_Phone_Call/) • [📖 Documentation](https://github.com/Bsh54/AI_Phone_Call/wiki) • [🐛 Report Bug](https://github.com/Bsh54/AI_Phone_Call/issues) • [✨ Request Feature](https://github.com/Bsh54/AI_Phone_Call/issues)

</div>

---

## ✨ Features

### 🎯 **Core Functionality**
- 🗣️ **Real-time Voice Recognition** - Speak naturally using Web Speech API
- 🤖 **AI Conversations** - Powered by DeepSeek AI for intelligent responses
- 🔊 **Natural Voice Synthesis** - High-quality text-to-speech with multiple voices
- 📱 **Phone Call Simulation** - Authentic call interface with timer and status

### 🎨 **Premium Design**
- 🌈 **Vibrant Gradients** - Modern UI with dynamic color schemes
- ✨ **Glassmorphism Effects** - Elegant transparency and blur effects
- 📱 **Mobile-First Design** - Responsive interface optimized for all devices
- 🎭 **Smooth Animations** - Fluid transitions and micro-interactions

### 🔧 **Technical Excellence**
- ⚡ **Zero Dependencies** - Pure JavaScript, no frameworks required
- 🛡️ **Security First** - Secure API handling and data protection
- 🌐 **Cross-Browser** - Compatible with modern browsers
- 🎛️ **Customizable** - Easy configuration and voice selection

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- HTTPS connection (required for Web Speech API)
- Microphone access permission

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bsh54/AI_Phone_Call.git
   cd AI_Phone_Call
   ```

2. **Start a local server**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Configuration

Update the API configuration in `script.js`:

```javascript
const API_CONFIG = {
    TTS_API: 'your-tts-api-endpoint',
    AI_API: 'your-ai-api-endpoint',
    AI_TOKEN: 'your-api-token'
};
```

---

## 🎮 How to Use

### 1. **Configure Your Call**
- 🎤 Select your preferred voice (French or English)
- ⚡ Adjust speech speed (0.5x - 2.0x)
- 🔊 Set volume level (0% - 100%)

### 2. **Start the Conversation**
- 📞 Click "Démarrer l'appel" to begin
- 🎙️ Speak naturally when prompted
- 👀 Watch real-time transcription

### 3. **Enjoy Natural AI Chat**
- 🤖 AI responds automatically with voice
- 💬 View conversation history
- ⏱️ Monitor call duration

### 4. **End When Ready**
- 📴 Click "Terminer l'appel" to finish
- 🔄 Return to configuration for next call

---

## 🏗️ Architecture

```
User Voice Input → Web Speech API → Real-time Transcription → DeepSeek AI API → AI Response Text → TTS API → Audio Synthesis → Automatic Playback → Continue Conversation
```

### 🔧 **Tech Stack**

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ | User interface and interactions |
| **Voice Recognition** | Web Speech API | Real-time speech-to-text |
| **AI Processing** | DeepSeek API | Intelligent conversation responses |
| **Voice Synthesis** | Edge TTS API | High-quality text-to-speech |
| **Styling** | CSS Grid, Flexbox, Gradients | Modern responsive design |

---

## 🎨 Customization

### Voice Selection

The interface supports multiple voice options:

```javascript
// Available voices (filtered for quality)
const voices = {
    'fr-FR-DeniseNeural': 'Denise - Français (France)',
    'fr-FR-HenriNeural': 'Henri - Français (France)',
    'en-US-JennyNeural': 'Jenny - English (US)',
    'en-US-GuyNeural': 'Guy - English (US)'
};
```

### Styling Themes

Customize the gradient themes in `style.css`:

```css
:root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

---

## 🛡️ Security

This project implements several security measures:

- 🔐 **Secure API Communication** - HTTPS-only API calls
- 🛡️ **Input Sanitization** - XSS protection for all user inputs
- 🎤 **Privacy Protection** - No permanent voice data storage
- 🔒 **Token Security** - Secure API token handling

For detailed security information, see [SECURITY.md](SECURITY.md).

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 **Bug Reports**
- Use the [issue tracker](https://github.com/Bsh54/AI_Phone_Call/issues)
- Include browser version and steps to reproduce
- Provide console error messages if available

### ✨ **Feature Requests**
- Describe the feature and its benefits
- Include mockups or examples if possible
- Explain the use case

### 🔧 **Pull Requests**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 25+ | ✅ Full Support |
| Firefox | 44+ | ✅ Full Support |
| Safari | 14.1+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |

**Note**: Web Speech API requires HTTPS in production environments.

---

## 📁 Project Structure

```
ai-phone-call/
├── index.html              # Main interface
├── script.js               # Core JavaScript logic
├── style.css               # Premium styling
├── speakers.json           # Voice configurations
├── image/                  # Assets and icons
├── cloudflare-workers/     # TTS API backend
│   ├── index.js           # Worker script
│   ├── wrangler.toml      # Configuration
│   └── README.md          # API documentation
├── SECURITY.md            # Security guidelines
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## 🔧 API Configuration

### DeepSeek AI API
```javascript
const AI_CONFIG = {
    endpoint: 'https://shads229-personnal-aiv2.hf.space/v1/chat/completions',
    model: 'deepseek-chat',
    maxTokens: 500,
    temperature: 0.7
};
```

### TTS API (Cloudflare Workers)
```javascript
const TTS_CONFIG = {
    endpoint: 'https://librettts-api.shadobsh.workers.dev',
    supportedVoices: ['fr-FR-DeniseNeural', 'fr-FR-HenriNeural', 'en-US-JennyNeural', 'en-US-GuyNeural'],
    rateRange: [-100, 100],
    pitchRange: [-100, 100]
};
```

---

## 🚀 Deployment

### Frontend Deployment

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
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (main/master)

### Backend API (Cloudflare Workers)

```bash
cd cloudflare-workers
npm install -g wrangler
wrangler login
wrangler deploy
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Web Speech API** - For enabling voice recognition
- **DeepSeek AI** - For intelligent conversation capabilities
- **Microsoft Edge TTS** - For high-quality voice synthesis
- **Bootstrap** - For responsive design components

---

## 📞 Support

Need help? We're here for you!

- 📧 **Email**: shadrakbsh@gmail.com
- 💬 **GitHub Discussions**: [Join our community](https://github.com/Bsh54/AI_Phone_Call/discussions)
- 📖 **Documentation**: [Full docs](https://github.com/Bsh54/AI_Phone_Call/wiki)
- 🐛 **Issues**: [GitHub Issues](https://github.com/Bsh54/AI_Phone_Call/issues)

---

<div align="center">

**Made with ❤️ for the future of human-AI interaction**

[⭐ Star this repo](https://github.com/Bsh54/AI_Phone_Call) • [🍴 Fork it](https://github.com/Bsh54/AI_Phone_Call/fork) • [📢 Share it](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20AI%20Phone%20Call%20interface!%20https://github.com/Bsh54/AI_Phone_Call)

</div>