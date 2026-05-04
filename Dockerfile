# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Cloud Run expects the container to listen on port 8080 
# (or the port specified in the PORT env var)
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
