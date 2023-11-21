import express from "express";
import multer from 'multer';

import deleteById from "../services/post/crud/deleteById.js";
import getAll from "../services/post/crud/getAll.js";
import getById from "../services/post/crud/getById.js";
import getByTag from "../services/post/crud/getByTag.js";
import getAllTags from "../services/post/tags/getAllTags.js";

import verifyToken from '../middleware/verifyToken.js'

const router = express.Router();

router.get("/all", async (req, res) => {
    getAll(req, res)
});

router.get("/all/tags", async (req, res) => {
    getAllTags(req, res)
})

router.get("/get/id/:id", async (req, res) => {
    getById(req, res)
});

router.get("/get/tag/:tag", async (req, res) => {
    getByTag(req, res)
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
    deleteById(req, res)
});

export default router;
