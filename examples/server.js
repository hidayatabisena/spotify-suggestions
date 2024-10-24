import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001; 

app.use(express.static(path.join(__dirname, 'web')));

app.listen(PORT, () => {
    console.log(`Example server running at http://localhost:${PORT}`);
});
