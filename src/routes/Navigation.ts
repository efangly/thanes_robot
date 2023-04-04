import { Router } from "express";
import { NavigationList, NavigationPoint, NavigationToCharge } from "../controllers/NaviController";
const NaviRouter:Router = Router();

//user 
NaviRouter.get('/', NavigationList);
NaviRouter.get('/target/:id', NavigationPoint);
NaviRouter.get('/charge', NavigationToCharge);

export default NaviRouter;