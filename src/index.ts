import { server, port } from './server';

server.listen(port, () => {
  console.log(`Servidor iniciado em: http://localhost:${port}`);
});
