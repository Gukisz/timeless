import { Router, RequestHandler } from "express";

interface RestController {
    list: RequestHandler;
    create: RequestHandler;
    show: RequestHandler;
    update: RequestHandler;
    delete: RequestHandler;
}

export function createRestRoutes(basePath: string, controller: RestController): Router {
    const router = Router();

    router.get(`/${basePath}`, controller.list);
    router.post(`/${basePath}`, controller.create);
    router.get(`/${basePath}/:id`, controller.show);
    router.patch(`/${basePath}/:id`, controller.update);
    router.delete(`/${basePath}/:id`, controller.delete);

    return router;
}
