import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from Vite's build output
app.use(express.static(path.join(__dirname, 'dist')));

// JSON Server setup
const router = jsonServer.router('src/jobs.json');
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, router); // API endpoints at /api

// Fallback to React app for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});