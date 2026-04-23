<<<<<<< HEAD
# Projet Docker 
## 🛠️ Étapes pour installer Docker et pousser ton image
### 1. Installer Docker
Sur Ubuntu Server, utilise APT (plus stable que Snap) :
````
sudo apt update
sudo apt install docker.io -y
````
Ensuite, ajoute ton utilisateur au groupe Docker pour éviter de taper sudo à chaque fois :

````
sudo usermod -aG docker $USER
newgrp docker
````
Vérifie :

bash
docker --version
### 2. Se connecter à Docker Hub
````
docker login
````
👉 Entre ton username et ton mot de passe Docker Hub.
````
mon username: fersd-----gmail
password: 1yTAr-------2018
````
### 3. Tagger ton image
Si ton image locale s’appelle projet_docker-frontend:latest, tu dois la tagger avec ton namespace Docker Hub :

````
docker tag projet_docker-frontend:latest feridsaad/contacts-frontend:1.0
````
### 4. Pousser l’image
````
docker push feridsaad/contacts-frontend:1.0
````
### 5. Vérifier sur Docker Hub
Va sur ton compte Docker Hub → tu dois voir ton repo contacts-frontend avec le tag 1.0.

## 🚀 Ensuite sur K3s
Dans ton frontend-deployment.yaml, tu mets l’image Docker Hub :

yaml
````
containers:
- name: contacts-frontend
  image: feridsaad/contacts-frontend:1.0
  ports:
  - containerPort: 80
  ````
Puis tu appliques :

````
kubectl apply -f frontend-deployment.yaml
````
=======
"# Projet Docker" 
# 📦 Déploiement d’une Application Multi‑Tiers avec Docker Compose

## 🎯 Objectifs
Ce projet illustre :
- La conception d’une application web full‑stack simple (Frontend + Backend + Base de données).
- La dockerisation des composants avec Dockerfiles optimisés.
- L’orchestration multi‑conteneurs via Docker Compose.
- La segmentation réseau pour isoler les services.
- La persistance des données avec volumes.
- La configuration dynamique via variables d’environnement.
- Les bonnes pratiques DevOps (health checks, limites de ressources, sécurité).

---

## 🏗️ Architecture
- **Frontend** : Application web (HTML/JS ou framework moderne) exposée sur [http://localhost:8080](http://localhost:8080).
- **Backend** : API REST (Node.js/Express) exposée sur [http://localhost:3000](http://localhost:3000).
- **Database** : MySQL 8.0, exposée sur le port `3308` côté hôte.

### Réseaux
- `frontend-net` : relie frontend ↔ backend.  
- `backend-net` : relie backend ↔ database.  
👉 Le frontend n’a pas accès direct à la base (principe de moindre privilège).

### Volumes
- `contacts-mysql-data` : persistance des données MySQL.

---

## ⚙️ Commandes Utiles
```bash
# Lancer les services
docker compose up -d

# Arrêter les services
docker compose down

# Vérifier l’état des conteneurs
docker compose ps

# Consulter les logs
docker compose logs -f backend

# Vérifier les ressources
docker stats
````
## 📸 Commandes pour les captures obligatoires
````
docker compose ps        # Services Up et healthy
docker network ls        # Vérifier les réseaux
docker volume ls         # Vérifier le volume de données
docker stats             # Limites de ressources
docker inspect contacts-backend   # Vérifier health check

>>>>>>> c0a48b342c0f27da0e29d5f86284d760351397b0
