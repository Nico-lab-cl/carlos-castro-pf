FROM nginx:1.27-alpine

# Configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Archivos del sitio estático
COPY index.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
