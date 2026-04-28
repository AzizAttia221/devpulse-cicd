# 🚀 DevPulse - CI/CD avec GitHub Actions

Projet d'apprentissage pour mettre en place un pipeline d'intégration et de déploiement continu (CI/CD) avec GitHub Actions.

![CI](https://github.com/<votre-username>/devpulse-cicd/actions/workflows/ci.yml/badge.svg)
![CD](https://github.com/<votre-username>/devpulse-cicd/actions/workflows/cd.yml/badge.svg)

## 📋 Description

Ce projet est un site web statique (HTML/CSS/JS) déployé automatiquement sur GitHub Pages via GitHub Actions. Il démontre les bonnes pratiques du CI/CD :

- **CI** : Validation automatique du code à chaque push
- **CD** : Déploiement automatique sur GitHub Pages
- **PR Check** : Analyse des Pull Requests avant fusion

## 🛠️ Structure du projet

```
devpulse-cicd/
├── app/                      # Site web statique
│   ├── index.html           # Page principale
│   ├── style.css            # Feuille de styles
│   ├── app.js               # Logique JavaScript
│   └── env.js               # Métadonnées de build (généré)
├── .github/workflows/       # Workflows GitHub Actions
│   ├── ci.yml              # Validation CI
│   ├── cd.yml              # Déploiement CD
│   └── pr-check.yml        # Vérification PR
├── .gitignore              # Fichiers ignorés
├── .env.example            # Modèle de variables
└── README.md               # Documentation
```

## 🚦 Pipeline CI/CD

```
Développeur → git push → GitHub Actions
                              │
                              ├─→ CI (ci.yml)
                              │   ✓ Validation HTML/CSS/JS
                              │   ✓ Vérification des fichiers
                              │
                              └─→ CD (cd.yml) [sur main]
                                  ✓ Génération métadonnées
                                  ✓ Déploiement GitHub Pages
```

## 🌐 Déploiement

Le site est automatiquement déployé à chaque push sur la branche `main`.

**URL** : `https://<votre-username>.github.io/devpulse-cicd/`

## 📖 Ressources

- [Documentation GitHub Actions](https://docs.github.com/fr/actions)
- [GitHub Pages](https://pages.github.com)
- [Format YAML](https://yaml.org)

## 📝 Licence

MIT