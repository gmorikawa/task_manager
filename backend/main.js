const app = require('./app');
const config = require('./.config.json');

app.listen(config.server.port, () => {
    console.log(`Example app listening on port ${config.server.port}`);
});