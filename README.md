# Mohammed Fakir — AI Engineer & Data Scientist Portfolio

Un portfolio professionnel haute performance, inspiré directement de [symo-portfolio.pages.dev](https://symo-portfolio.pages.dev/), doté d'animations 3D WebGL, d'effets néon cyberpunk, de typographie Kanit fluide et d'un assistant conversationnel interactif J.A.R.V.I.S.

---

## ⚡ Caractéristiques Principales & Animations Pro

1. **Arrière-plan 3D Neural Constellation (Three.js & WebGL)** :
   - Constellation dynamique de nœuds avec liaisons synaptiques calculées en temps réel.
   - Flux d'impulsions lumineuses (signaux cyan / magenta) circulant le long des connexions.
   - Parallaxe 3D réactif à la souris et fondu automatique lors du défilement.

2. **Hero Section Immersif** :
   - Typographie géante fluide Kanit (`HI, I'M FAKIR`) avec reflets métalliques.
   - Avatar 3D central (`/head.png`) avec orbe néon animé en pulsation (`orb-pulse`), masque radial et inclinaison dynamique au mouvement du curseur.
   - Badges de disponibilité en direct (*Available for work*).

3. **Curseur Cyberpunk Réticule Cible** :
   - Réticule de ciblage à 4 coins animés suivant la position de la souris de façon fluide.
   - Détection automatique et agrandissement magnétique sur les boutons, cartes et liens interactifs.

4. **Marquee Infini du Tech Stack** :
   - Défilement continu fluide des logos vectoriels (Python, PyTorch, TensorFlow, Scikit-learn, LangChain, React, Node.js, TypeScript, .NET, Docker, MongoDB, etc.).
   - Effet de survol avec zoom et mise en surbrillance néon.

5. **Section À Propos & Métriques Clés** :
   - Diamant holographique 3D flottant avec rotation et ombres portées douces.
   - Cartes piliers de compétences (Intelligence Artificielle, Ingénierie des données, Produits Full-Stack).
   - Métriques d'impact (Master Data Science & AI, 04+ Systèmes en production, 10K+ données traitées).

6. **Section Expertise (Services 01 à 05)** :
   - Numérotation géante dans un arrière-plan violet cosmique profond (`#18011F`).
   - Lignes interactives avec révélation de chips techniques au survol.

7. **Vitrine Projets Interactifs (Flagship Projects)** :
   - **01 AI Legal Assistant** (RAG Gen AI — Droit Marocain, LangChain, ChromaDB, citation bilingue FR/AR).
   - **02 Market Sentiment AI** (Big Data NLP, 10k+ articles analysés, Power BI Dashboard).
   - **03 Oil Spill Detection** (Vision par ordinateur sur imagerie satellite SAR, IoU 0.88).
   - **04 CLV — Dislog Group** (Data Science Client, XGBoost, K-Means, AUC-ROC 0.81).
   - **Console de captures interactives** : navigation multi-écrans avec miniatures et zoom plein écran lightbox au clic.

8. **Section Contact "LET'S TALK" avec Effet TrueFocus** :
   - Titre animé avec cadre lumineux de visée changeant de mot avec des coins néon pulsants.
   - Bouton de copie d'e-mail instantané avec notification et explosion de confettis (`canvas-confetti`).
   - Liens directs vers LinkedIn et GitHub.
   - Formulaire de contact moderne et fluide.

9. **Assistant IA Virtuel J.A.R.V.I.S** :
   - Réacteur holographique rotatif en bas à droite avec anneaux concentriques inversés.
   - Infobulle intelligente apparaissant au scroll.
   - Fenêtre de chat avec effet dactylo (typewriter) et moteur de réponses contextuelles (projets, stack, disponibilité, contact, etc.).

---

## 🚀 Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org/) (v18 ou supérieur)
- npm

### Installation & Lancement en local

```bash
# Se placer dans le dossier du portfolio
cd C:\Users\pc_A\portfolio

# Lancer le serveur de développement Vite
npm run dev
```

Ouvrez ensuite l'URL indiquée dans votre terminal (par défaut `http://localhost:5173/`).

### Construction pour la Production

```bash
# Générer le bundle optimisé
npm run build

# Prévisualiser la version de production localement
npm run preview
```

---

## 🛠️ Structure du Projet

```
portfolio/
├── public/                 # Assets statiques & captures haute résolution
│   ├── head.png            # Avatar 3D central
│   ├── legal/              # Captures du projet AI Legal Assistant
│   ├── Sentiement/         # Captures du projet Market Sentiment AI
│   ├── oilspill/           # Captures du projet Oil Spill Detection
│   ├── clv/                # Captures du projet CLV Dislog Group
│   └── [technos]/          # Logos vectoriels SVG du stack
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx          # Section À Propos & Diamant 3D
│   │   ├── ContactSection.jsx        # Contact, TrueFocus & Formulaire
│   │   ├── ExpertiseSection.jsx      # Sections 01-05 & Services
│   │   ├── GeometricDecorations.jsx  # Formes 3D (Sphère, Anneau, Diamant)
│   │   ├── HeroSection.jsx           # Hero, Avatar 3D & Titre géant
│   │   ├── JarvisAssistant.jsx       # Assistant IA conversationnel J.A.R.V.I.S
│   │   ├── LogoMarquee.jsx           # Défilement infini des technos
│   │   ├── Navbar.jsx                # Barre de navigation flottante
│   │   ├── NeuralBackground.jsx      # Toile Three.js WebGL Constellation
│   │   ├── ProjectsSection.jsx       # Projets, carousel & modal zoom
│   │   ├── SocialIcons.jsx           # Icônes SVG optimisées (GitHub, LinkedIn)
│   │   ├── TargetCursor.jsx          # Curseur cyberpunk réticule cible
│   │   └── TrueFocus.jsx             # Effet de focus néon sur le texte
│   ├── App.jsx                       # Assemblage principal de l'application
│   ├── index.css                     # Styles Tailwind v4 & animations CSS
│   └── main.jsx                      # Point d'entrée React
├── index.html                        # Base HTML avec police Kanit
├── package.json
└── vite.config.js                    # Configuration Vite & Tailwind
```

---

## 🌐 Déploiement

Ce portfolio est 100% statique et prêt à être déployé en un clic :

- **Cloudflare Pages** : Connectez votre dépôt Git ou glissez-déposez le dossier `dist/`.
- **Vercel** : Exécutez `vercel` ou importez le projet sur le tableau de bord Vercel (Framework : Vite, Output directory : `dist`).
- **Netlify** : Déposez directement le dossier `dist/` sur Netlify Drop.
