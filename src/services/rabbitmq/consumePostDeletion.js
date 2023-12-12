import { connect } from 'amqplib';
import postModel from "../../models/post.js";

const rabbitMQServerURL = `${process.env.RABBITMQ_SERVER_URL}`;

const consumePostDeletion = async () => {
    try {
        const connection = await connect(rabbitMQServerURL);
        const channel = await connection.createChannel();
        console.log("Connected to RabbitMQ server");

        const queue = 'posts-deletion';
        await channel.assertQueue(queue, { durable: false });

        channel.consume(queue, async (msg) => {
            const message = JSON.parse(msg.content.toString());
            const id = message.id;
            await postModel.update({ deletedAt: new Date() }, { where: { id } });

            channel.ack(msg);
        });


    } catch (error) {
        console.log(error);
    }
}

export default consumePostDeletion;