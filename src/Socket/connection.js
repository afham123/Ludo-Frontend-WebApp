const { io } = require("socket.io-client");

const socket = io("http://localhost:4002/", {
    reconnectionDelayMax: 10000,
    auth: {
        token: "123"
    },
    query: {
        eventmetadata: "my-value",
        data: 'afham'
    },

});

socket.emit("hello", { a: "b", c: [] }, { d: "d" }, { eventmetadata: 1234 }, (response) => {
    console.log(response); // "got it"
});