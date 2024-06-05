import { Request, Response } from "express"
import { TB_CURSO_ESTUDIANTE } from "../models/cursoestudianteModel"
class ControllerCursoEstudiante {
    constructor(){}

     async readCursosEstudiantes(req: Request, res: Response){
        try {
           // const data = await TB_CURSO_ESTUDIANTE.find();
            // res.status(200)
            res.json({msg: "Visualiza registros intermedia"})
        } catch (error) {
            if(error instanceof Error){
               console.log(error.message)
            }
        }
    }

    async readCursoEstudiante(req: Request, res: Response){
        try {
           // const {id} = req.params;
            //const data = await TB_CURSO_ESTUDIANTE.findOneBy({idCurso: Number(id)})
           // res.status(200)
            res.json({msg: "Visualiza registro intermedia "})

        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    async createCursoEstudiante(req: Request, res: Response){
        try {
            //const data = await TB_CURSO_ESTUDIANTE.save(req.body)
            //res.status(201)
            res.json({msg: "Crear registro tabla intermedia "})
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    async updateCursoEstudiante(req: Request, res: Response){
        try {
          //  const {id} = req.params;
           // await TB_CURSO_ESTUDIANTE.update({idCurso: Number(id)}, req.body)
            // res.status(200)
            res.json({msg: "Actualizar registro tabla intermedia "})
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    
    async deleteCursoEstudiante(req: Request, res: Response){
        try {
          //  const {id} = req.params;
           // await TB_CURSO_ESTUDIANTE.delete({idEstudiante: Number(id)})
           //  res.status(200)
           res.json({msg: "Elimina registro tabla intermedia"})
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }
}

export default new ControllerCursoEstudiante; 