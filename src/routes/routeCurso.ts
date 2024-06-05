import express from 'express';
const router = express.Router();
import controllerCurso from '../controllers/controllerCurso';

router.get("/", controllerCurso.readCursos)
router.post("/", controllerCurso.createCurso)

router.route("/:id")
.get(controllerCurso.readCurso)
.put(controllerCurso.updateCurso)
.delete(controllerCurso.deleteCurso)

export default router;