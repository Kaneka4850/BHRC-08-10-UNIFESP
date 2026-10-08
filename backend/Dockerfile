FROM node:18-bullseye-slim

# Instala Python 3 e cria o alias para "python"
RUN apt-get update && apt-get install -y python3 python-is-python3 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Instala as dependências do Node.js
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que o express usa (3001)
EXPOSE 3001

CMD ["npm", "start"]
