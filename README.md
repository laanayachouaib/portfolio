# Chouaib LAANAYA — Portfolio Ingénieur Logiciel & Développeur Full-Stack

Portfolio professionnel haute performance développé avec des animations 3D WebGL (Three.js), un thème sombre moderne inspiré de Linear et Apple, une console interactive de démonstration de projets et un assistant conversationnel contextuel J.A.R.V.I.S.

---

## ⚡ Caractéristiques Principales & Expérience Utilisateur

1. **Arrière-plan 3D Neural Constellation (Three.js & Canvas WebGL)** :
   - Constellation interactive de particules connectées par des liaisons synaptiques dynamiques.
   - Pulsions énergétiques circulant le long des arêtes et attraction/dispersion magnétique réactive à la souris.
   - Parallaxe fluide avec estompage doux lors du défilement.

2. **Hero Section Immersive** :
   - Titre cinématique animé avec dégradé argenté liquide et reflets néon.
   - Avatar 3D central (`/e889c03e-d4ff-4943-b903-46e64fb613f1.png`) avec anneaux orbitaux concentriques rotatifs et halo néon pulsant.
   - Badges de statut en direct (*Disponible pour stage / missions*).

3. **Curseur Cyberpunk Réticule Cible** :
   - Réticule de visée magnétique suivant la souris avec agrandissement automatique au survol des éléments interactifs.

4. **Marquee Infini du Tech Stack** :
   - Défilement continu fluide des technologies maîtrisées : React 19, TypeScript, Node.js, Express, PostgreSQL, MySQL, Python, Java & Spring Boot, Docker, Git, Flutter, Ollama, Power BI.

5. **Console Interactive de Projets Concrets (Flagship Projects)** :
   - **01 Dashboard de Performance Industrielle · LEONI Wiring Systems** :
     - Plateforme de supervision temps réel (Socket.IO), TRS / OEE, télémétrie des machines CNC, Pareto 80/20 de conformité qualité, gestion des stocks de câblage et module RH de calcul de paie.
   - **02 Plateforme de Gestion Hôtelière · GIGA MANAGER** :
     - Application web sur-mesure (PHP / MySQL / Merise), calendrier dynamique de réservation, matrice de disponibilité des chambres, facturation et gestion des rôles.
   - **03 AI Legal Assistant · RAG Droit Marocain** :
     - Pipeline RAG souverain (LangChain, ChromaDB, Ollama locale), recherche sémantique vectorielle bilingue (Français & Arabe RTL), citations vérifiables des codes de lois (Constitution, Moudawana, DOC).
   - **04 Market Sentiment AI & NLP Big Data** :
     - Pipeline Big Data analytique ingérant 10k+ dépêches et réseaux sociaux (Twitter, Reddit, Reuters, Bloomberg), classification NLP de sentiment et tableaux de bord décisionnels Power BI.
   - **Console Mockup & Lightbox** :
     - Barre de navigation macOS avec pastille de statut live et URL sécurisée.
     - Légende dynamique contextuelle se synchronisant instantanément lors du clic sur une miniature.
     - Lightbox plein écran haute définition au clic (ou touche Échap).

6. **Parcours Académique & Professionnel** :
   - Cycle d'Ingénieur Informatique à l'Université Mundiapolis (2025 – 2027).
   - Expériences professionnelles chez LEONI Wiring Systems, GIGA MANAGER et AgriSani.
   - Certification AWS Academy Cloud Foundations.

7. **Assistant IA Virtuel J.A.R.V.I.S** :
   - Réacteur holographique interactif en bas à droite avec anneaux rotatifs.
   - Moteur conversationnel contextuel capable de répondre en direct sur le profil, le parcours, les projets, le stack technique et les coordonnées de Chouaib.

8. **Section Contact Direct** :
   - Copie instantanée de l'e-mail et du téléphone avec explosion de confettis (`canvas-confetti`).
   - Téléchargement immédiat du CV PDF (`CV_Laanaya_Chouaib.pdf`).
   - Formulaire de message direct avec badges de sujets interactifs.

---

## 🚀 Démarrage Rapide

### Option 1 : Lancement Sans NPM (Serveur Python Local)
Double-cliquez simplement sur :
```bash
lancer_sans_npm.bat
```
Ou dans un terminal :
```bash
python serveur.py
```
Le portfolio sera accessible immédiatement sur :
- **Sur ce PC** : `http://localhost:5000`
- **Sur mobile / réseau local Wi-Fi** : `http://<VOTRE_IP_LOCALE>:5000`

### Option 2 : Lancement avec Node.js & Vite (Développement)
```bash
# Se placer dans le dossier
cd C:\Users\pc_A\portfolio

# Lancer le serveur Vite
npm run dev

# Générer le bundle de production optimisé dans dist/
npm run build
```

---

## 🛠️ Structure Nettoyée du Projet

```
portfolio/
├── dist/                      # Version de production compilée et optimisée
├── public/                    # Assets statiques & captures haute définition
│   ├── e889c03e-d4ff-4943-b903-46e64fb613f1.png # Avatar 3D
│   ├── CV_Laanaya_Chouaib.pdf # CV officiel de Chouaib LAANAYA
│   ├── leoni/                 # Captures du dashboard usine LEONI
│   ├── hotel/                 # Captures du PMS hôtelier GIGA MANAGER
│   ├── legal/                 # Captures du RAG AI Legal Assistant
│   ├── Sentiement/            # Captures du Market Sentiment Power BI
│   └── [technos]/             # Logos vectoriels SVG du stack (React, Node, etc.)
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx          # Parcours académique, diplômes & certifications
│   │   ├── ContactSection.jsx        # Contact, copie rapide, CV & message direct
│   │   ├── ExpertiseSection.jsx      # Domaines de compétences & architectures
│   │   ├── HeroSection.jsx           # Hero cinématique, avatar 3D & statut live
│   │   ├── JarvisAssistant.jsx       # Assistant IA conversationnel J.A.R.V.I.S
│   │   ├── LogoMarquee.jsx           # Défilement infini des logos du tech stack
│   │   ├── Navbar.jsx                # Barre de navigation flottante avec bascule thème
│   │   ├── NeuralBackground.jsx      # Toile Three.js WebGL Constellation
│   │   ├── ProjectsSection.jsx       # Vitrine de projets concrets & console HD
│   │   ├── SocialIcons.jsx           # Icônes SVG vectorielles optimisées
│   │   └── TargetCursor.jsx          # Curseur cyberpunk réticule cible
│   ├── App.jsx                       # Assemblage principal React
│   ├── index.css                     # Styles Tailwind v4 & animations CSS
│   └── main.jsx                      # Point d'entrée React
├── index.html                        # Application complète et autonome
├── lancer_sans_npm.bat               # Script de lancement rapide en un clic
├── serveur.py                        # Serveur HTTP local autonome en Python
├── package.json                      # Dépendances Vite, Tailwind CSS & React
└── vite.config.js                    # Configuration de build Vite
```
