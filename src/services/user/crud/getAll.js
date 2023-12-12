import userModel from '../../../models/user.js';

export default async function getAll(req, res) {
    try {
        const { page, pageSize } = req.query;
        const offset = (page - 1) * pageSize;
        const userPages = await userModel.count();

        const users = await userModel.findAll({
            order: [['updatedAt', 'DESC']],
            limit: parseInt(pageSize),
            offset: parseInt(offset),
        });

        res.status(200).json({ users, userPages });

    } catch (err) {
        res.status(500).json(err);
    }
}