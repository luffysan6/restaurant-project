import express from "express";
import Env from "./config/env.js";
import AuthRouter from "./route/auth.route.js";
import connectDB from "./config/connectToDB.js";
import cookieparser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({
    message: "server started Successfuly",
  });
});

async function startServer() {
  await connectDB();

  app.listen(Env.PORT, () => {
    console.log(`Server started at URL http://localhost:${Env.PORT} `);
  });
}

startServer();
