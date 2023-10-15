import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { config } from "dotenv";
import { connectDatabase } from "./v2/database/db.config";
import { userRouter } from "./v1/users/user.routes";
import { productRouter } from "./v1/products/product.routes";
import router from "./v2/routes/userRoutes";


config();
connectDatabase();
const port = process.env.PORT;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req: Request, res: Response)=>{
  return res.send({message: "Rota Inicial API Node + Typescript + Repository Pattern"})
})

// ROTAS DA V1 DA API
server.get("/api/v1", (req: Request, res: Response) => {
  return res
    .status(StatusCodes.OK)
    .json({ message: "Rota inicial da V1 da API " });
});
server.use("/api/v1/users", userRouter);
server.use("/api/v1/products", productRouter)


// ROTAS DA V2 DA API
server.get("/api/v2/", (req: Request, res: Response) => {
  return res
    .status(StatusCodes.OK)
    .json({ message: "Rota inicial da V2 da API Repository Pattern " });
});
server.use('/api/v2/users', router());


export { server, port };
