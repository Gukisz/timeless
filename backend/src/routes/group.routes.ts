import { Router } from "express";

const groupRoutes = Router();
const groupController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}

groupRoutes.get('/group', groupController.list)
groupRoutes.post('/group', groupController.create)
groupRoutes.get('/group/:id', groupController.show)
groupRoutes.patch('/group/:id', groupController.update)
groupRoutes.delete('/group/:id', groupController.delete)


export default groupRoutes;