exports.run = (io, socket, data, callback) => {
    // Log message data
    console.log(JSON.stringify(data, null, " "));
    // Emit message to all users
    io.emit("message", data);
};