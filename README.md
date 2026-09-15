# TP React/TSX

Application web développée avec React et Vite dans le cadre d'un TP scolaire.

## Fonctionnalités

- **Accueil** : liste des recettes disponibles
- **Liste des utilisateurs** : consultation des utilisateurs enregistrés
- **Fiche recette** : détails d'une recette (ingrédients, instructions, temps de préparation/cuisson)
- **Fiche utilisateur** : consultation du profil public d'un utilisateur
- **Connexion** : authentification via nom d'utilisateur / mot de passe
- **Profil** : page personnelle affichée après connexion
- **Page 404** : gestion des routes inconnues

## Stack technique

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) pour la navigation
- Données statiques via fichiers JSON (`users.json`, `recipes.json`)

## Installation

```bash
# Cloner le repo
git clone <url-du-repo>
cd <nom-du-dossier>

# Installer les dépendances
npm install
```

## Lancer le projet en développement

```bash
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`.

## Structure du projet

```
src/
├── pages/           # Composants de page (Connexion, Profile, User, Recette, UserList, Err404)
│   └── css/          # Feuilles de style
├── components/       # Composants réutilisables (Header, etc.)
├── users.json         # Données des utilisateurs
├── recipes.json       # Données des recettes
├── App.jsx            # Page d'accueil
└── main.tsx           # Point d'entrée, configuration du routeur
```

## Auteur

Emrick RIVET — B2 IA&Data Sophia Ynov Campus