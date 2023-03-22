import express from "express"
import { creat, getAll, remove, update, get } from "../controller/product"

const router = express.Router()


router.get("/products",getAll)

router.get("/products/:id",get)

router.delete("/products/:id",remove)

router.patch("/products/:id",update)

router.post("/products",creat)

export default router