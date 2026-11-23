# Etapa 1: Build
FROM node:24-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala todas as dependências
RUN npm ci

# Copia a aplicação
COPY tsconfig.json ./
COPY src ./src

# Compila o TypeScript
RUN npm run build

# Copia as views e arquivos estáticos
RUN cp -r src/views dist/views && cp -r src/public dist/public


# Etapa 2: Produção
FROM node:24-alpine AS production

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala somente as dependências de produção
RUN npm ci --omit=dev

# Copia a aplicação compilada
COPY --from=build /app/dist ./dist

# Define a porta da aplicação
EXPOSE 8004

# Inicia o servidor
CMD ["node", "dist/server.js"]