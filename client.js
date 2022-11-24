const acknowledgePhones = [];

socket.emit('connect', input.phone);

socket.on("ping", (data) => {
    acknowledgePhones.push(data.phone);
});

function ping(wantedPhones) {
    acknowledgePhones = [];
    for (String phone: phones) {
        socket.emit('ping', phone);
    }
}
