const crypto = require("crypto");

exports.run = (io, socket, data, callback) => {
    // Log message data
    console.log(JSON.stringify(data, null, " "));
    // Add message to message map
    messages.set(crypto.randomBytes(10).toString("hex"), data);
    // Emit message to all users
    io.emit("message", data);
};