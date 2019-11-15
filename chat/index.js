// Setup basic express server
const initSocket = (io) => {

    io.on('connection', socket => {                        
        socket.on('disconnect', () => {
            console.log(socket.id, "disconnect");
        });        
    })    
}


module.exports = {
    initSocket : initSocket
}