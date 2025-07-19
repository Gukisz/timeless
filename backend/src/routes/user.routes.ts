import { Router } from "express";
import { createRestRoutes } from "../utils/createRestRoutes";

const userController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}

const userRoutes = createRestRoutes('user', userController);

export default userRoutes;