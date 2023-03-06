import express, { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  return res.send("Express Typescript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

app.listen(5000, () => {
  return console.log(`Server is listening on 5000`);
});
