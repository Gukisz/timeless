import { createRestRoutes } from "../utils/createRestRoutes";

const taskController = {
    list: async () => {},
    create: async () => {},
    show: async () => {},
    update: async () => {},
    delete: async () => {}
}
const taskRoutes = createRestRoutes('task', taskController);

export default taskRoutes;