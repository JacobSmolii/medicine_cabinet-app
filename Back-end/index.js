const PORT = process.env.PORT || 5000; // needed for deployment
const server = require('./server')


server.listen(PORT, () => console.log('Server is running on port 5000'));
