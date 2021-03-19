exports.run = (io, socket, data, callback) => {
    // Set username
    socket.username = data.username;
    // Set colour
    socket.colour = data.colour;

    // Log user details stored
    console.log(`New user: ${socket.username} (${socket.colour})`);

    // Add user to online users
    onlineUsers.set(socket.id, {username:socket.username, colour:socket.colour})
    // Create online user array
    const userArray = [];
    onlineUsers.forEach(u => {
        userArray.push({username:u.username, colour:u.colour});
    });

    // Create messages array
    const messageArray = [];
    messages.forEach(m => {
        messageArray.push(m);
    })

    // Broadcast new user join
    console.log(userArray)
    io.emit("new_user_join", {username:socket.username, colour:socket.colour, onlineUsers:userArray, messageArray:messageArray});
};