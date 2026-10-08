FROM python:3.13-slim

WORKDIR /app

# Instala Node.js 24 para garantir o mesmo ambiente (v24.16)
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Instala dependências do Python
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Instala as dependências do Node.js
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta do express
EXPOSE 3001

CMD ["npm", "start"]
