import { Router } from "express";

import sessionsR from "./sessions.routes.js";
import viewsR from "./views.routes.js";
import productsR from "./products.routes.js";
import cartsR from "./carts.routes.js";
import pruebasR from './prueba.routes.js'


// Routers
const router = Router();
const cartsRouter = new cartsR();
const sessionsRouter = new sessionsR();
const viewsRouter = new viewsR();
const productsRouter = new productsR();
const pruebasRouter = new pruebasR();

router.use('/test', pruebasRouter.getRouter())
router.use("/view", viewsRouter.getRouter());
router.use("/sessions", sessionsRouter.getRouter());
router.use("/carts", cartsRouter.getRouter());
router.use("/products", productsRouter.getRouter());

export default router;
