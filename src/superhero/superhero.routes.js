import { Router} from "express"
import { obtenerLosSuperheroes } from "./superhero.controller.js";

const router = Router()

router.get('/obtenerLosSuperheroes',
     obtenerLosSuperheroes
    )

export default router