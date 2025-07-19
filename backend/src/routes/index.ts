import { Router } from "express";


import groupRoutes from "./group.routes";
import taskRoutes from "./task.routes";
import userRoutes from "./user.routes";
import categoryRoutes from "./category.routes";

const routes = Router();

routes.use(userRoutes)
routes.use(taskRoutes)
routes.use(categoryRoutes)
routes.use(groupRoutes)

export default routes;