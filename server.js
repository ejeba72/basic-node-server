const http = require("http");
const { config } = require("dotenv");

config();

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

const server = http.createServer();

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is attentively listening for requests @ ${HOSTNAME}:${PORT}`);
});