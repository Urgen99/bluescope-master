
LABEL Author="Urgen Tamang"
LABEL Project="CICD Bluescope"


# Step 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build && npm run export

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

