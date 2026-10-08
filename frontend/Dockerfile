FROM node:18-bullseye-slim

WORKDIR /app

# Instala as dependências do Vite/React
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que o Vite usa por padrão (5173)
EXPOSE 5173

# O parâmetro --host garante que o Vite exponha a aplicação na rede Docker
CMD ["npm", "run", "dev", "--", "--host"]
