exports.run = (io, socket, data, callback) => {
    setTimeout(function() {
        return callback("ame pong!");
    }, 1000);
};