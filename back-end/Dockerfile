# Usa immagine ufficiale Node.js (LTS) come base
FROM node:18-alpine

# Imposta la working directory all’interno del container
WORKDIR /usr/src/app

# Copia i file package.json e package-lock.json (o yarn.lock)
COPY package*.json ./

# Installa le dipendenze (in produzione)
RUN npm ci --only=production

# Copia tutto il resto del codice
COPY . .

# Esponi la porta su cui gira l’app (adatta alla tua config)
EXPOSE 3000

# Comando per avviare l’app (modifica se usi nodemon o altro)
CMD ["node", "src/index.js"]
