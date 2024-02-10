import { NextFunction, Request, Response, Router } from "express";
import { addNewTestUsers, addNewUser, deleteAllTestUsers, deleteUserByParticipentId, getAllUsers, getUserById, getUserByParticipentId } from "../logic/users-logic";
import { UserModel } from "../models/user-model";

export const usersRouter = Router();

usersRouter.get('/all', async (req: Request, res: Response, next: NextFunction) => {

    const allSquads = await getAllUsers();

    return res.json(allSquads);
})

usersRouter.get('/participentId/:participentId', async (req: Request, res: Response, next: NextFunction) => {

    const userParticipentId = req.params.participentId;
    const user = await getUserByParticipentId(userParticipentId);

    return res.json(user);
})

usersRouter.get('/userid/:userid', async (req: Request, res: Response, next: NextFunction) => {

    const userId = req.params.userid;
    const allSquads = await getUserById(userId);

    return res.json(allSquads);
})

usersRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {

    if (!req.body.participentId) {
        return res.status(400).json({
            error: "missing participent id",
        });
    }

    if (!req.body.startDate) {
        return res.status(400).json({
            error: "missing start date",
        });
    }

    if (!req.body.accessToken) {
        return res.status(400).json({
            error: "missing access token",
        });
    }

    try {
        const isUserExist: UserModel[] | any = await getUserByParticipentId(req.body.participentId);

        if (!isUserExist[0]) {
            const resoult = await addNewUser(req.body);
            return res.status(200).json(resoult);
        }

        return res.status(409).send("User all ready exist");

    } catch (error) {
        console.error(error);
    }
})

usersRouter.get('/all', async (req: Request, res: Response, next: NextFunction) => {

    const allSquads = await getAllUsers();

    return res.json(allSquads);
})

usersRouter.delete('/participentId/:participentId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userParticipentId = req.params.participentId;
        const user = await deleteUserByParticipentId(userParticipentId);
        return res.json(user);
    } catch (error) {
        console.error(error);
    }
})


// testing

usersRouter.post('/test', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resoult = await addNewTestUsers(req.body.amount);
        return res.status(200).json(resoult);
    } catch (error) {
        console.error(error);
    }
})

usersRouter.delete('/test', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await deleteAllTestUsers();
        return res.json(users);
    } catch (error) {

    }
})