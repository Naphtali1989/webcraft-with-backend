module.exports = connectSockets

function connectSockets(io) {
    //listen to on conenction events
    io.on('connection', socket => {
        console.log('connected!')

        socket.on('savedWap', wap => {
            console.log('getting wap?:', wap);
            socket.broadcast.emit('savedWap', wap)
        })
    })
}