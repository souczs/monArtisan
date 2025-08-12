# Projet ReactJS - Trouve ton artisan

## Description
Ce projet est une application web réalisée avec **ReactJS**, permettant de rechercher et consulter des fiches d’artisans.  
Les utilisateurs peuvent envoyer des demandes via un formulaire de contact intégré à chaque fiche artisan.  

L’interface est conçue avec **Bootstrap** et **Sass** pour un design responsive et moderne.  
Le système d’envoi d’e-mails est simulé via **MailDev** en environnement de développement.

## Technologies utilisées
- **ReactJS** (Create React App)
- **Bootstrap 5**
- **Sass (SCSS)**
- **JavaScript (ES6+)**
- **React Router**
- **MailDev**
- **Node.js + Express** (backend pour l’envoi des e-mails)

## Structure du projet
src
|-- assets : polices et images.
|-- components : composants réutilisables.
|-- data : données artisans au format JSON.
|-- pages : pages principales.
|-- styles : fichiers au format SCSS.
|-- App.js
|-- index.js

## Hebergement
Le site est hébergé via Vercel, accessible à l'adresse https://mon-artisan-mu.vercel.app.

## Installation et démarrage

### Cloner le projet
git clone https://github.com/utilisateur/mon-projet-artisans.git
### Installer les dépendances
npm install
### Lancer le frontend
npm run start
### Installer le backend 
cd backend
npm install
### Lancer maildev
npm maildev

## Licence
Projet réalisé dans un cadre pédagogique. Libre d’utilisation et de modification.