import{Router} from "express";
import { vistaHome } from "../controllers/indexRoutes.js";
import { vistaLogin } from "../controllers/indexRoutes.js";
import { vistaRegistro } from "../controllers/indexRoutes.js";
import { postLogin } from "../controllers/indexRoutes.js";
import { postRegistro } from "../controllers/indexRoutes.js";

const router = Router();

//Rutas get
router.get("/",vistaHome);
router.get("/login",vistaLogin);
router.get("/registro",vistaRegistro);

router.get("/",(req,res)=>{
    res.send("Este es el home");
})

//Rutas post
router.post("/login",postLogin);
router.post("/registro",postRegistro);

export default router;