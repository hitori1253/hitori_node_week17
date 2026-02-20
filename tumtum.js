import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import config from './config/index.js';

dotenv.config();

const app = express();
const port = config.port;

morgan.token('body', (req) => JSON.stringify(req.body));

app.use(morgan('dev'));

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
    console.log("เดบีรุนห้ามเข้ามา");
    return res.json({ message: "เดบีรุนห้ามเข้ามา" });
});

app.get('/api/health', (req, res) => {
    return res.json({ status: 'OK', message: 'Server is running' });
});


app.use((req, res) => {
    return res.status(404).json({ error: 'Route not found' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});