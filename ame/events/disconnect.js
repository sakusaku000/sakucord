exports.run = (io, socket, data, callback) => {
    // Log disconnection
    console.log(`Client disconnected: ${socket.id}`);
    // Emit to all users client disconnected (if client had a username assigned)
    if (socket.username) {
        io.emit("user_leave", {username:socket.username, colour:socket.colour});
    };
};