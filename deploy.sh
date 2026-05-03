#!/bin/bash

echo "🚀 Déploiement de l'application Contacts sur K3s"
echo "=================================================="

# Appliquer les secrets (les premiers)
echo "📝 Application des secrets..."
kubectl apply -f k8s/mysql-secret.yaml

# Appliquer les ConfigMaps
echo "📝 Application des ConfigMaps..."
kubectl apply -f k8s/mysql-configmap.yaml

# Appliquer le stockage persistant
echo "💾 Application du PVC..."
kubectl apply -f k8s/mysql-pvc.yaml

# Déployer MySQL
echo "🐬 Déploiement de MySQL..."
kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/mysql-service.yaml

# Attendre que MySQL soit prêt
echo "⏳ Attente de MySQL (30 secondes)..."
sleep 30

# Déployer le Backend
echo "⚙️ Déploiement du Backend..."
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml

# Déployer le Frontend
echo "🎨 Déploiement du Frontend..."
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

# Optionnel : Ingress
echo "🌐 Déploiement de l'Ingress (optionnel)..."
kubectl apply -f k8s/frontend-ingress.yaml

# Afficher l'état du déploiement
echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "📊 État des ressources :"
echo "------------------------"
echo "📦 Pods :"
kubectl get pods
echo ""
echo "🌐 Services :"
kubectl get svc
echo ""
echo "🚀 Deployments :"
kubectl get deployments
echo ""
echo "💾 PVC :"
kubectl get pvc
echo ""
echo "🌍 Accès à l'application :"
echo "   - NodePort : http://192.168.1.10:30080"
echo "   - Ingress (si configuré) : http://contacts.local"
echo ""
echo "📝 Vérifier les logs :"
echo "   kubectl logs -f deployment/contacts-frontend"
echo "   kubectl logs -f deployment/contacts-backend"