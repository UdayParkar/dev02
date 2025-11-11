#!/bin/bash
apt-get update -y
apt-get install -y docker.io docker-compose
systemctl enable docker
systemctl start docker

cat <<EOF > /home/azureuser/docker-compose.yml
version: '3'
services:
  backend:
    image: ${ACR_NAME}.azurecr.io/Backend:latest
    ports:
      - "5000:5000"
  frontend:
    image: ${ACR_NAME}.azurecr.io/Frontend:latest
    ports:
      - "80:80"
EOF

docker-compose up -d
