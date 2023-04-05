import { Router } from "express";
import { QueueList } from "../controllers/QueueController";
const QueueRouter:Router = Router();

//user 
QueueRouter.get('/', QueueList);

export default QueueRouter;