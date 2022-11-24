function connect() {
  socket.emit('connect', input.phone);
}

function ping(phones) {
  for (String phone : phones) {
     socket.emit('ping', phone);
     socket.on("ping", () => {
      console.log("connected")
    });
  }
}
