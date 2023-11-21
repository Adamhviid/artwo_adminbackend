import express from "express";

import getAll from '../services/user/crud/getAll.js'
import get from '../services/user/crud/get.js'
import verify from "../services/user/auth/verify.js"
import login from "../services/user/auth/login.js";

import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

//auth
router.post("/login", async (req, res) => {
    login(req, res)
});

//crud
router.get("/all", async (req, res) => {
    getAll(req, res)
});

router.get("/get/:username", async (req, res) => {
    get(req, res)
});

router.get("/verify", verifyToken, async (req, res) => {
    verify(req, res)
})

export default router;