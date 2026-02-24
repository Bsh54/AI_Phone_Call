# LibreTTS - Synthèse Vocale Gratuite

**Dernière mise à jour : 24 février 2026**

LibreTTS est une application web de synthèse vocale (Text-to-Speech) gratuite et open source qui permet de convertir du texte en audio avec plusieurs options de voix et de personnalisation.

## Fonctionnalités

- Support de 300+ voix en différentes langues (anglais/français principalement)
- Ajustement vitesse/tonalité
- Insertion de pauses personnalisées
- Historique local (50 entrées max)
- Interface responsive mobile
- API Cloudflare Workers incluse

## Déploiement

### Frontend (GitHub Pages / Netlify / Vercel)
Déployez directement les fichiers `index.html`, `script.js`, `style.css` et `speakers.json`.

### API Backend (Cloudflare Workers)
```bash
cd cloudflare-workers
wrangler deploy
```

Votre API sera disponible à : `https://librettts-api.VOTRE-SUBDOMAIN.workers.dev`

## Structure du projet

```
LibreTTS-main/
├── index.html              # Interface utilisateur
├── script.js               # Logique frontend
├── style.css               # Styles CSS
├── speakers.json           # Configuration des voix
├── image/                  # Assets images
├── cloudflare-workers/     # API Cloudflare Workers
│   ├── index.js           # API TTS complète
│   ├── wrangler.toml      # Configuration
│   └── README.md          # Documentation API
└── README.md              # Ce fichier
```

## Utilisation

1. Sélectionnez une voix
2. Saisissez votre texte
3. Ajustez vitesse/tonalité si nécessaire
4. Cliquez sur "Générer la voix"
5. Téléchargez ou écoutez l'audio généré

## Licence

MIT License - Voir le fichier LICENSE pour plus de détails.