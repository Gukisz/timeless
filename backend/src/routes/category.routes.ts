import { Router } from "express";

const categoryRoutes = Router();
const categoryController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}

categoryRoutes.get('/category', categoryController.list)
categoryRoutes.post('/category', categoryController.create)
categoryRoutes.get('/category/:id', categoryController.show)
categoryRoutes.patch('/category/:id', categoryController.update)
categoryRoutes.delete('/category/:id', categoryController.delete)


export default categoryRoutes;