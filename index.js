import Express from "express";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

import productRouter from "./routes/productRoute.js";

const app = Express();
app.use(Express.json());
dotenv.config();

app.use("/", productRouter);

let user = [
  { id: 1, name: "ChiuChiu", age: 3 },
  { id: 2, name: "Molang", age: 5 },
];

app.get("/user", (req, res) => {
  res.send(user);
});

app.post("/user", (req, res) => {
  const id = uuidv4();
  const newUser = { id, name: req.body.name, age: req.body.age };
  user = [...user, newUser];
  console.log(user, "u");
  return res.send(user);
});
app.listen(process.env.PORT, () => console.log("running"));
