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

