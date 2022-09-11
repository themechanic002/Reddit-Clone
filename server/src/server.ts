import express from "express";
import morgan from "morgan";

const app = express();

// 미들웨어 추가하기
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("running"));

let port = 4000;

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});
