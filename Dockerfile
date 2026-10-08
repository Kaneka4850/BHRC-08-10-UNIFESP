FROM julia:1.10.0

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY . .

# Caso utilize um ambiente Node.js na pasta frontend (como percebido no diretório)
# RUN apt-get update && apt-get install -y nodejs npm

# Comando padrão ao iniciar o container
CMD ["julia"]
