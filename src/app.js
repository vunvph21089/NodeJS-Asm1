import express from "express"
import routerPro from "./router/product";
import mongoose from "mongoose";

const app = express();

app.use(express.json())

app.use("/api",routerPro)

mongoose.connect("mongodb://127.0.0.1:27017/we17303")
    .then(() => {
        console.log("Kết nối DB thành công");
    })
    .catch(err => console.log(err))

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Kết nối thất bại ${err}`));
dbConnection.once("open", () => console.log("Kết nối thành công đến DB!"));

export const viteNodeApp = app