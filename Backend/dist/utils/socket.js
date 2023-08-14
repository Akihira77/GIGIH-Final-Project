import { Server } from "socket.io";
import userCommentService from "../services/repositories/userComment.service.js";
export const startSocket = (server, corsOptions) => {
    const io = new Server(server, {
        cors: corsOptions,
    });
    io.on("connection", (socket) => {
        socket.on("join_room", (room) => {
            console.log(`User ${socket.id} joined room ${room}`);
        });
        socket.on("send_message", async (data) => {
            const savedComments = await userCommentService.submitComment({
                videoId: data.room,
                username: data.username,
                comment: data.message,
            });
            await savedComments.save();
            socket.to(data.room).emit("receive_message", data);
        });
        socket.on("leave_room", (room) => {
            socket.leave(room);
        });
        socket.on("disconnect", () => {
        });
    });
};
