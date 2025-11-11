# Stage 1 — Build
FROM node:18-alpine AS build
WORKDIR /app
COPY app/backend/package*.json ./
RUN npm ci --only=production
COPY app/backend/ .

# Stage 2 — Runtime
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app

# Use service name for DB host when using Docker Compose
ENV MONGODB_URI=mongodb://mongo:27017/aura

EXPOSE 3000
CMD ["npm", "start"]
