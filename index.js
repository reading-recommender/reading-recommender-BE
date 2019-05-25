const server = require('./server');

const port = process.env.PORT || 6000

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})