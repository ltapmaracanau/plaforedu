# Use a imagem base do Node.js
FROM node:16.3.0-alpine3.13

# Crie o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json (ou yarn.lock, se você estiver usando o Yarn) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Construa a aplicação
RUN npm run build

# Active hot-reload react
ENV CHOKIDAR_USEPOLLING=true



# Exponha a porta na qual a aplicação irá rodar (geralmente a porta 3000)
EXPOSE 3000

# Inicie a aplicação
CMD ["npm", "start"]