import Express from "express";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";

const app = Express();
app.use(Express.json());
dotenv.config();

app.use("/", productRouter);

app.use("/user", userRouter);

app.listen(process.env.PORT, () => console.log("running"));
