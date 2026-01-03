import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/", async () => {
  return { status: "ok" };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
