import express,{Request,Response,NextFunction} from 'express';
import {router} from './routes'

const app = express();
const PORT = 3333;
app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT} - Projeto Inventory Control`)
})