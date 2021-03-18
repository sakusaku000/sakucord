exports.run = (io, socket, data, callback) => {
    // Set username
    socket.username = data.username;
    // Set colour
    socket.colour = data.colour;

    // Log user details stored
    console.log(`New user: ${socket.username} (${socket.colour})`);

    // Broadcast new user join
    io.emit("new_user_join", {username:socket.username, colour:socket.colour});
};