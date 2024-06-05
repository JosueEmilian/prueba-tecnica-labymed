import {DataSource} from 'typeorm';
import {TB_ESTUDIANTE} from '../models/estudianteModel'
import { TB_CURSO } from '../models/cursoModel';
import { TB_CURSO_ESTUDIANTE } from '../models/cursoestudianteModel';

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "DESKTOP-PVTQ51N",
    port: 1433,
    username: "USRJOSUE",
    password: "123456",
    database: "BD_PRUEBA_TECNICA",
    synchronize: false,
    //logging: true,
    entities: [TB_ESTUDIANTE, TB_CURSO, TB_CURSO_ESTUDIANTE],
    subscribers: [],
    migrations: [],
    options: {
        trustServerCertificate: true
    }
})
