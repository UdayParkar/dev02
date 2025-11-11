#!/bin/bash
echo "Running Trivy scan on local images..."
trivy image aurabeauty_backend
trivy image aurabeauty_frontend