import { Router } from "express";

const userRoutes = Router();
const userController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}

userRoutes.get('/user', userController.list)
userRoutes.post('/user', userController.create)
userRoutes.get('/user/:id', userController.show)
userRoutes.patch('/user/:id', userController.update)
userRoutes.delete('/user/:id', userController.delete)


export default userRoutes;