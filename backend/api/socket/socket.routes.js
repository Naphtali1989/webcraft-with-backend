module.exports = connectSockets

var gActivites = [];

function connectSockets(io) {
    //listen to on conenction events
    io.on('connection', socket => {
        socket.on('editCmp', cmpIdx => { socket.broadcast.to(socket.wapId).emit('editCmp', cmpIdx) }
        )

        socket.on('savedWap', wap => {
            // socket.broadcast.emit('savedWap', wap)
            socket.broadcast.to(socket.wapId).emit('savedWap', wap)
        })

        socket.on('form-submitted', (data) => {
            // io.emit('form-submitted', data)
            socket.broadcast.emit('form-submitted', data)
        })

        socket.on('add-activity', data => {
            console.log('data', data);
            gActivites.push(data);
            console.log('activity array', gActivites);
            io.emit('add-activity', gActivites)
            // io.to(socket.wapId).emit('add-activity', add-activity);
            // io.emit('add-activity', gActivites);
        })

        socket.on('roomRoute', wapId => {
            console.log(wapId)
            if (socket.wapId) {
                socket.leave(socket.wapId)
            }
            socket.join(wapId)
            console.log('Connected')
            socket.wapId = wapId;
        })
        socket.on('disconnect', () => {
            console.log('Disonnected')
            gActivites = [];
            socket.removeAllListeners('roomRoute');
        });
    })




}