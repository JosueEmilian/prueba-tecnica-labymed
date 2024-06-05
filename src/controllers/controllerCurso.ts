import { Request, Response } from "express"
import { TB_CURSO } from "../models/cursoModel";
class ControllerCurso {
    constructor(){}

     async readCursos(req: Request, res: Response){
        try {
           // const data = await TB_CURSO.find();
            // res.status(200)
            res.json({msg: "Visualiza cursos"})
        } catch (error) {
            if(error instanceof Error){
               console.log(error.message)
            }
        }
    }

    async readCurso(req: Request, res: Response){
        try {
           // const {id} = req.params;
            //const data = await TB_CURSO.findOneBy({idCurso: Number(id)})
           // res.status(200)
            res.json({msg: "Visualiza curso individual"})

        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    async createCurso(req: Request, res: Response){
        try {
            //const data = await TB_CURSO.save(req.body)
            //res.status(201)
            res.json({msg: "Crea curso "})
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    async updateCurso(req: Request, res: Response){
        try {
          //  const {id} = req.params;
           // await TB_CURSO.update({idCurso: Number(id)}, req.body)
            // res.status(200)
            res.json({msg: "Actualiza curso "})
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    
    async deleteCurso(req: Request, res: Response){
        try {
          //  const {id} = req.params;
           // await TB_ESTUDIANTE.delete({idEstudiante: Number(id)})
           //  res.status(200)
           res.json({msg: "Elimina individual"})
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }
}

export default new ControllerCurso; 