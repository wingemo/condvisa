const acknowledgePhones = [];

socket.emit('connect', input.phone);

socket.on("ping", (data) => {
    acknowledgePhones.push(data.phone);
});

function ping(phonesList) {
    acknowledgePhones = [];
    for (String phone: phonesList) {
        socket.emit('ping', phone);
    }
}
