socket.on("connect", () => {
  socket.emit("connect", phone);
});
