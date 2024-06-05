import { Request, Response } from "express"
import { TB_ESTUDIANTE } from "../models/estudianteModel"
class ControllerEstudiante {
    constructor(){}

     async readEstudiantes(req: Request, res: Response){
        try {
            const data = await TB_ESTUDIANTE.find();
            res.status(200)
        } catch (error) {
            if(error instanceof Error){
               console.log(error.message)
            }
        }
    }

    async readEstudiante(req: Request, res: Response){
        try {
            const {id} = req.params;
            const data = await TB_ESTUDIANTE.findOneBy({idEstudiante: Number(id)})
            res.status(200)
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    async createEstudiante(req: Request, res: Response){
        try {
            const data = await TB_ESTUDIANTE.save(req.body)
            res.status(201)
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    async updateEstudiante(req: Request, res: Response){
        try {
            const {id} = req.params;
            await TB_ESTUDIANTE.update({idEstudiante: Number(id)}, req.body)
            res.status(200)
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }

    
    async deleteEstudiante(req: Request, res: Response){
        try {
            const {id} = req.params;
            await TB_ESTUDIANTE.delete({idEstudiante: Number(id)})
            res.status(200)
        } catch (error) {
            if(error instanceof Error){
               res.status(500)
            }
        }
    }
}

export default new ControllerEstudiante; 