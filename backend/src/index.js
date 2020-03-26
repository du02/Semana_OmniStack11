const cors = require('cors');
const express = require('express');
const router = require('./routes');
const app = express();
const door = 3333;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(door, ()=>{
    console.log(`Sercidor rodando na porta - http://localhost:${door}`);
});