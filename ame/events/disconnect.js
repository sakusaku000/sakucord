exports.run = (io, socket, data, callback) => {
    // Log disconnection
    console.log(`Client disconnected: ${socket.id}`);
    // Emit to all users client disconnected (if client had a username assigned)
    if (socket.username) {
        // Remove user from online users
        onlineUsers.delete(socket.id);
        // Create online user array
        const userArray = [];
        onlineUsers.forEach(u => {
            userArray.push({username:u.username, colour:u.colour});
        })
        // Send out event to all users
        io.emit("user_leave", {username:socket.username, colour:socket.colour, onlineUsers:userArray});
    };
};