FROM nginx:alpine

# Supprimer la config par défaut pour éviter les conflits
RUN rm /etc/nginx/conf.d/default.conf

# Copier les fichiers statiques
COPY public/ /usr/share/nginx/html/

# Copier ta configuration personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Corriger les permissions des fichiers statiques
RUN chmod 644 /usr/share/nginx/html/*.html /usr/share/nginx/html/*.css /usr/share/nginx/html/*.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
