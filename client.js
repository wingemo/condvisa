function connect() {
  socket.emit('connect', input.phone);
}

function ping(phones) {
  for (String phone : phones) {
     socket.emit('ping', phone);
  }
}

socket.emit('check', input.phone);

socket.on("connect", () => {
  socket.emit("connect", phone);
});
