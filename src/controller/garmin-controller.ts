
import { NextFunction, Request, Response, Router } from "express";

export const garminRouter = Router();

garminRouter.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    return res.send("what?")
})