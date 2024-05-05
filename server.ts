import { app } from "./app";
import http from "http";

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server listen on: http://localhost:${PORT}`);
});
