setInterval(test, 5000);

function test() {
  pingPhoneList();
  console.log(getAcknowledgePhones());
}

const acknowledgePhones = [];

socket.emit('connect', input.phone);
socket.on("ping", (data) => {
    acknowledgePhones.push(data.phone);
});

function pingPhoneList(phoneList) {
    acknowledgePhones = [];
    for (String phone: phoneList) {
        socket.emit('ping', phone);
    }
}

function getAcknowledgePhones() {
    return acknowledgePhones;
}
