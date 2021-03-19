// Configure Environment Variables
require("dotenv").config();

// Modules
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors:{
        origin:process.env.FRONT_END_ORIGIN_DOMAIN,
        methods:["GET", "POST"]
    }
});
const fs = require("fs");

// Open HTTP Server
http.listen(process.env.PORT, function() {
    console.log(`Ame Socket Server, running on Port ${process.env.PORT}`);
});

// Default GET Route
app.get("*", function(req, res) {
    return res.redirect(process.env.FRONT_END_ORIGIN_DOMAIN);
});

// -- STORAGE
global.onlineUsers = new Map();
global.messages = new Map();

// On Socket Connections
io.on("connection", socket => {
    // Log new connection
    console.log(`New Client Connection: ${socket.id}`);

    // Load socket events
    fs.readdirSync(`${__dirname}/events`).forEach(f => {
        socket.on(f.replace(".js", ""), function(data, callback) {
            // Run event function
            require(`./events/${f}`).run(io, socket, data, callback);
        });
    });
});