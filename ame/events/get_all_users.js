exports.run = (io, socket, data, callback) => {
    // Send back all users
    callback(onlineUsers);
};