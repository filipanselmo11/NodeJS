const { render } = require("ejs");

const socket = io();
let connectionsUsers = [];

socket.on("admin_list_all_users", (connections) => {
    connectionsUsers = connections;
    document.getElementById("list_users").innerHTML = "";

    let template = document.getElementById("template").innerHTML;
    connections.forEach(connection => {

        const rendered = Mustache.render(template, {
            email: connection.user.email,
            id: connection.socket_id
        });

        document.getElementById("lsit_users").innerHTML += rendered;
    });
});

function call(id) {
    const connection = connectionsUsers.find(connection => connection.socket_id === id);

    const template = document.getElementById("admin_template").innerHTML;

    const render = Mustache.render(template, {
        email: connection.user.emal,
        id: connection.user_id

    });

    document.getElementById("supports").innerHTML += render;

    const params = {
        user_id: connection.user_id
    }

    socket.emit("admin_list_messages_by_user", params, messages => {
        console.log("Messages", messages);
    });
}