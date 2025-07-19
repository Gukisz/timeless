import { createRestRoutes } from "../utils/createRestRoutes";

const categoryController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}

const categoryRoutes = createRestRoutes('category', categoryController);


export default categoryRoutes;