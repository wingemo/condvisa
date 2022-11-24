function connect() {
    socket.emit('connect', input.phone);
}

function ping(phones) {
    const acknowledgePhones = [];
    for (String phone: phones) {
        socket.emit('ping', phone);
        socket.on("ping", (data) => {
            acknowledgePhones.push(data.phone);
        });
    }
    return acknowledgePhones;
}
