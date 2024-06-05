import express from 'express';
const router = express.Router();
import controllerCursoEstudiante from '../controllers/controllerCursoEstudiante';

router.get("/", controllerCursoEstudiante.readCursosEstudiantes)
router.post("/", controllerCursoEstudiante.createCursoEstudiante)

router.route("/:id")
.get(controllerCursoEstudiante.readCursoEstudiante)
.put(controllerCursoEstudiante.updateCursoEstudiante)
.delete(controllerCursoEstudiante.deleteCursoEstudiante)

export default router;