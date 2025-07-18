import { Router } from "express";

const taskRoutes = Router();
const taskController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}

taskRoutes.get('/task', taskController.list)
taskRoutes.post('/task', taskController.create)
taskRoutes.get('/task/:id', taskController.show)
taskRoutes.patch('/task/:id', taskController.update)
taskRoutes.delete('/task/:id', taskController.delete)


export default taskRoutes;