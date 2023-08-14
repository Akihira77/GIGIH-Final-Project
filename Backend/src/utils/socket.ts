import { Server } from "socket.io";
import userCommentService from "../services/repositories/userComment.service.js";

export const startSocket = (server: any, corsOptions: any) => {
  const io = new Server(server, {
    cors: corsOptions,
  });

  io.on("connection", (socket) => {
    // console.log(`User connected ${socket.id}`);

    socket.on("join_room", (room) => {
      // socket.join(room);
      console.log(`User ${socket.id} joined room ${room}`);
    });

    socket.on("send_message", async (data) => {
      const savedComments = await userCommentService.submitComment({
        videoId: data.room,
        username: data.username,
        comment: data.message,
      });
      await savedComments.save();
      // console.log(savedComments);

      socket.to(data.room).emit("receive_message", data);
    });

    socket.on("leave_room", (room) => {
      socket.leave(room);
      // console.log(`User ${socket.id} leave room ${room}`);
    });

    socket.on("disconnect", () => {
      // console.log("User Disconnected", socket.id);
    });
  });
};
