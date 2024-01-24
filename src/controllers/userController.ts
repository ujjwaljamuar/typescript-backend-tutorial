import { NextFunction, Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    const allUsers: string[] = ["Ujjwal", "Jamuar", "Romeo", "Juliette"];

    res.json({
        allUsers,
    });
};
