import express from 'express';
const router = express.Router();
import controllerEstudiante from '../controllers/controllerEstudiante'


router.get("/", controllerEstudiante.readEstudiantes)
router.post("/", controllerEstudiante.createEstudiante)

router.route("/:id")
.get(controllerEstudiante.readEstudiante)
.put(controllerEstudiante.updateEstudiante)
.delete(controllerEstudiante.deleteEstudiante)

export default router;