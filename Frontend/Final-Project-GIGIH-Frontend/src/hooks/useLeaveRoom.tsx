import { useEffect } from "react";

export const useLeaveRoom = ({ room, socket }) => {
  useEffect(() => {
    if (room) {
      socket.emit("leave_room", room);

      window.sessionStorage.removeItem("room");
    }
  }, [room]);
};
