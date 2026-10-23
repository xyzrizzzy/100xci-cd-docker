import { WebSocketServer } from "ws";
import prisma from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection",function connection(ws) {
  ws.on("message", async function incoming(message) {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
  });

  ws.send("user created");
});