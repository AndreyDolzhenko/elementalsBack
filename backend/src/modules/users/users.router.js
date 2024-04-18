import { Router } from "express";

import { getAllUsers } from "./controller.js";

const router = Router();

router.get('/', getAllUsers);

export default router;