module.exports = connectSockets

function connectSockets(io) {
    //listen to on conenction events
    io.on('connection', socket => {
        console.log('connected!')

        socket.on('savedWap', wap => {
            console.log('getting wap?:', wap);
            // socket.broadcast.emit('savedWap', wap)
            socket.broadcast.to(socket.wapId).emit('savedWap', wap)
        })

        socket.on('form-submitted', (data) => {
            console.log('data:', data);
            io.emit('form-submitted', data)
        })

        socket.on('roomRoute', wapId => {
            console.log('getting wap id:', wapId);
            if (socket.wapId) {
                console.log('there is a active socket');
                socket.leave(socket.wapId)
            }
            socket.join(wapId)
            socket.wapId = wapId;
        })
        socket.on('disconnect', () => {
            console.log('disconncted from room');
            socket.removeAllListeners('roomRoute');
        });
    })




}