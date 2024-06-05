import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {AppDataSource} from './bd/connection'
import routeEstudiante from './routes/routeEstudiante';
import routeCurso from './routes/routeCurso'
import routeCursosEstudiantes from './routes/routeCursosEstudiantes' 

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json())

app.use("/estudiantes", routeEstudiante)
app.use("/cursos", routeCurso)
app.use("/curso-estudiante", routeCursosEstudiantes)

async function main(){
    try {
     await AppDataSource.initialize();
       // console.log("Se conecto de forma correcta a la bd!")
        app.listen(port, ()=>{
            console.log(`Sever escuchando en el puerto ${port}`)
        })
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
        }
    }
}

main();