import { Request, Response, Router } from "express";
import Admin from "../entities/Admin";
import IAdmin from "../interfaces/IAdmin";
import AdminRepository from "../repositories/AdminRepository";

const adminRouter = Router();

adminRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const adminRepository = new AdminRepository();
    const admin = await adminRepository.getAdmin();
    return resp.status(200).json(admin);
});

export default adminRouter;