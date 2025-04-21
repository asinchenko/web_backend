# 🛠️ Backend - Node.js + Express

This is a simple backend service built using **Node.js** and **Express**. It's designed to support a frontend application by providing API routes for system and database health checks.

---

## ⚙️ Configuration

The backend requires the following PostgreSQL environment variables to be defined at the **OS level**:

- `PG_USER` – your PostgreSQL username  
- `PG_HOST` – hostname or IP of the PostgreSQL server  
- `PG_DB` – name of the PostgreSQL database  
- `PG_PASSWORD` – password for the database user  
- `PG_PORT` – port PostgreSQL is listening on (default: `5432`)  
- `PORT` – port to start application on (default: `3000`)  
Set them in your shell:

```bash
export PG_USER=myuser
export PG_HOST=localhost
export PG_DB=mydatabase
export PG_PASSWORD=mypassword
export PG_PORT=5432
export PORT=3000
```

## 🚀 Running the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
npm run start
```
## API Endpoints

### Health Check
- **Endpoint:** `GET /health`
- **Description:** Returns a simple status check to verify that the backend is running and reachable.

### Database Connection Check
- **Endpoint:** `GET /db-check`
- **Description:** Attempts a connection to the PostgreSQL database using the environment variables and returns success or failure.
