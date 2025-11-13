# Stage 1 — Build
FROM node:18-alpine AS build
WORKDIR /app
COPY app/backend/package*.json ./
RUN npm install
COPY app/backend/ .

# Stage 2 — Runtime
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app

# Use service name for DB host when using Docker Compose
ENV MONGO_URI=mongodb://mongo:27017/aura

EXPOSE 5000
CMD ["npm", "start"]
