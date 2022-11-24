function connect() {
  socket.emit('connect', input.phone);
}

function check(phones) {
  for (String phone : phones) {
     socket.emit('check', phone);
  }
}

socket.emit('check', input.phone);

socket.on("connect", () => {
  socket.emit("connect", phone);
});
