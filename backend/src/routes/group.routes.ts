import { createRestRoutes } from "../utils/createRestRoutes";

const groupController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}

const groupRoutes = createRestRoutes('group', groupController);


export default groupRoutes;