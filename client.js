const acknowledgePhones = [];

socket.emit('connect', input.phone);

socket.on("ping", (data) => {
    acknowledgePhones.push(data.phone);
});

function ping(phoneList) {
    acknowledgePhones = [];
    for (String phone: phoneList) {
        socket.emit('ping', phone);
    }
}
