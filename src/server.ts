import express,{ Express } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import NaviRouter from "./routes/Navigation";

const app:Express = express();

dotenv.config();
const port:number = parseInt(process.env.PORT as string, 10);

//middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan("dev"));

//route
app.use('/api/navi',NaviRouter);

app.listen(port,()=>{
  console.log('Start server in port '+port);
})