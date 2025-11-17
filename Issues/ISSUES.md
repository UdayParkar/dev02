# Issues and Fixes Documentation

## 📦 1. Docker & Local Development Issues

### Issue 1 — Backend container failed until multi-stage build was created

**Cause:** Initial backend Dockerfile wasn't optimized and caused dependency issues.

**Fix:** Converted backend to a multi-stage Dockerfile (build + runtime).

---

### Issue 2 — React frontend returned 404 Not Found nginx/1.29.3

**Cause:** Nginx default config cannot handle React SPA routing → deep links (/cart, /checkout) returned 404.

**Fix:** Created custom nginx.conf with:

```nginx
try_files $uri /index.html;
```

---

### Issue 3 — nginx.conf wasn't copied into the image

**Cause:** .dockerignore excluded the entire docker/ folder.

**Fix:** Removed extra .dockerignore and ensured nginx.conf is copied.

---

### Issue 4 — Duplicate .dockerignore

**Cause:** Two .dockerignore files existed (root + docker/).

**Fix:** Deleted the one inside docker/.

---

### Issue 5 — "Something went wrong while placing the order" (Frontend checkout failure)

**Cause:** Frontend was using hardcoded backend URLs (http://backend:3000) from local Docker environment. Outside Docker / in production, this failed.

**Fix:**
- ✔ Added Nginx reverse proxy (/api → backend:5000)
- ✔ Removed all hardcoded API URLs
- ✔ Updated frontend to use relative path /api/...
- → Now works both locally & in production.

---

### Issue 6 — REACT_APP_API_URL was not injected during build

**Cause:** React build did not receive ARG/ENV inside multi-stage image.

**Fix:** Added:

```dockerfile
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
```

---

### Issue 7 — MongoDB connection needed verification

**Cause:** API worked but needed to confirm DB writes.

**Fix:** Manually tested endpoints + inspected Mongo container to verify documents.

---

## ☁️ 2. Terraform / AWS Infra Issues

### Issue 8 — Missing monitoring ports in Security Group

**Cause:** SG initially lacked 9100 (Node Exporter).

**Fix:** Added the ingress rule.

---

### Issue 9 — Manual ECR push failures

**Cause:** AWS login issues during initial push testing.

**Fix:** Authenticated manually & tested before integrating CI/CD.

---

## ⚙️ 3. Ansible Provisioning Issues

### Issue 10 — Node Exporter binary "not found"

**Cause:** Ansible tried to copy a file from local machine instead of remote.

**Fix:** Added `remote_src: yes`.

---

### Issue 11 — Wrong systemd service relative path

**Cause:** Incorrect relative path to node_exporter.service.

**Fix:** Corrected to:

```yaml
../monitoring/node_exporter.service
```

---

### Issue 12 — Grafana provisioning cannot use recursive with copy module

**Cause:** copy doesn't support recursive directory copy.

**Fix:** Switched to:

```yaml
synchronize:
  src: "../monitoring/graphana/"
  dest: "{{ monitor_dir }}/graphana/"
```

---

### Issue 13 — Wrong parameters (owner/group) passed to synchronize

**Cause:** synchronize does not support owner, group, mode.

**Fix:** Removed those fields.

---

## 🔄 4. CI/CD (GitHub Actions) Issues

### Issue 14 — ECR login failed in pipeline

**Cause:** Wrong / missing region.

**Fix:** Hardcoded correct region ap-south-1.

---

### Issue 15 — Wrong paths to Dockerfiles

**Cause:** GitHub Actions couldn't find Dockerfiles.

**Fix:** Corrected paths:

```
docker/frontend.Dockerfile
docker/backend.Dockerfile
```

---

### Issue 16 — Missing EC2 permissions in OIDC Role

**Cause:** Role could push to ECR but not describe EC2.

**Fix:** Added:

```
AmazonEC2ReadOnlyAccess
```

---

### Issue 17 — Deployment script failed due to missing compose file

**Cause:** GitHub runner expected docker-compose.yml on EC2.

**Fix:** Ansible now installs docker-compose.yml into /home/ubuntu.

---

## 📡 5. Monitoring (Prometheus, Grafana, Node Exporter)

### Issue 18 — Prometheus backend scrape error

**Error:**

```
lookup backend on 127.0.0.11: server misbehaving
```

**Cause:** Prometheus runs inside Docker, backend runs outside → wrong hostname.

**Fix:**

In docker-compose-monitor.yml:

```yaml
extra_hosts:
  - "host.docker.internal:host-gateway"
```

In prometheus.yml:

```yaml
host.docker.internal:5000
```

---

### Issue 19 — Prometheus used old config

**Cause:** Container didn't reload new config.

**Fix:** Restarted stack:

```bash
docker compose down && docker compose up -d
```

---

### Issue 20 — Grafana dashboard showed "No Data"

**Cause:** Wrong / outdated dashboard JSON.

**Fix:** Imported correct community dashboard manually.

---

### Issue 21 — Grafana provisioning schema errors

**Cause:** Files named incorrectly: prometheus.yml conflicted with schema.

**Fix:** Renamed to:

```
datasource-prometheus.yaml
dashboards.yaml
```

---

### Issue 22 — Grafana directory not copied due to name mismatch

**Cause:** Folder named graphana/ instead of grafana/.

**Fix:** Corrected all paths → works properly.