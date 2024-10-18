import express from "express";
import { validationProductMidd } from '../middlewares/index.js';
import { getAllProducsts, createProducst, getByIdProducst, updateByIdProducst, deleteByIdProducst } from "../controllers/products.controller.js";

export const productsRouter = express.Router()


//GET ALL
productsRouter.get("/", getAllProducsts)

//GET BY ID
productsRouter.get("/:id", getByIdProducst)

//CREATE
productsRouter.post("/", validationProductMidd, createProducst)

//UPDATE BY ID
productsRouter.put("/:id", updateByIdProducst)

//DELETE BY ID
productsRouter.delete("/:id", deleteByIdProducst)





