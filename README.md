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