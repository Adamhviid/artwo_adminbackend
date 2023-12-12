import postModel from "../../../models/post.js";
import followModel from "../../../models/follow.js";

export default async function getAll(req, res) {
    try {
        const { page, pageSize } = req.query;
        const offset = (page - 1) * pageSize;
        const postPages = await postModel.count();

        const posts = await postModel.findAll({
            order: [['updatedAt', 'DESC']],
            limit: parseInt(pageSize),
            offset: parseInt(offset),
        });

        const followers = await followModel.findAll();

        res.status(200).json({ posts, postPages, followers });

    } catch (err) {
        res.status(500).json(err);
    }
}