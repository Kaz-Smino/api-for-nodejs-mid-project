import { Router } from "express";
import { router as projectsRouter } from "./projects.router";
import { router as tasksRouter } from "./tasks.router";

export const apiRouter = Router();

const ROUTER = [
  { url: "/projects", router: projectsRouter},
  { url: "/tasks", router: tasksRouter}
];

ROUTER.forEach(({url, router}) => {
  apiRouter.use(url, router);  
});