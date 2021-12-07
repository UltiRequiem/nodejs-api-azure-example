import { createServer } from "http";
import { env } from "process";

const config = { port: env.PORT || 3000 };

const server = createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World!");
});

server.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
