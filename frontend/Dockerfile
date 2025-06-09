# Stage 1: Build dell’app Angular
FROM node:18-alpine as build-stage

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm ci

# Copia tutto il codice sorgente
COPY . .

# Builda l’app Angular in modalità produzione
RUN npm run build -- --prod

# Stage 2: Serve i file statici con nginx
FROM nginx:alpine

# Copia i file buildati da Angular nella cartella di nginx
COPY --from=build-stage /app/dist/[nome-progetto-angular] /usr/share/nginx/html

# Copia una configurazione personalizzata di nginx se serve
# COPY nginx.conf /etc/nginx/nginx.conf

# Espone la porta 80
EXPOSE 80

# Avvia nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
