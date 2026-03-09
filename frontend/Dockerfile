FROM nginx:alpine

# Créer les dossiers nécessaires et donner les droits à l'utilisateur nginx
RUN mkdir -p /var/run /var/cache/nginx /var/log/nginx /usr/share/nginx/html \
    && chown -R nginx:nginx /var/run /usr/share/nginx/html /var/cache/nginx /var/log/nginx

COPY public/ /usr/share/nginx/html/
RUN ls -l /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "pid /tmp/nginx.pid; daemon off;"]

