module.exports = connectSockets

function connectSockets(io) {
    //listen to on conenction events
    io.on('connection', socket => {
        console.log('connected!')

        socket.on('savedWap', wap => {
            console.log('getting wap?:', wap);
            socket.broadcast.emit('savedWap', wap)
        })

        //     socket.on('chat newMsg', msg => {
        //         console.log('msg has been recived: ', msg)
        //         console.log('socket toy id:', socket.toyId);
        //         //send the msgs to all boradcasts expect the sender
        //         socket.broadcast.emit('chat addMsg', msg)

        //     })

        //     socket.on('set-typing', username => {
        //         console.log('who is typing:', username);
        //         socket.broadcast.emit('set-typing', username)
        //         socket.broadcast.emit('rest-typing', true)
        //     })
        //     socket.on('rest-typing', () => {
        //         socket.broadcast.emit('rest-typing', false)
        //     })

        //     socket.on('delete-toy', (toyId) => {
        //         //ajax request to the routes
        //         socket.emit('delete-toy', toyId)
        //     })

        //     socket.on('chat-topic', toyId => {
        //         console.log('*****topic*****:', toyId);
        //         if (socket.toyId) {
        //             socket.leave(socket.toyId)
        //         }
        //         socket.join(toyId)
        //         socket.toyId = toyId;
        //     })
        // })
    })
}