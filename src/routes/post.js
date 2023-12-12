import express from "express";

import getAll from "../services/post/crud/getAll.js";
import getById from "../services/post/crud/getById.js";

import verifyToken from '../middleware/verifyToken.js'

const router = express.Router();

router.get("/all", async (req, res) => {
    getAll(req, res)
});

router.get("/get/id/:id", async (req, res) => {
    getById(req, res)
});

export default router;
