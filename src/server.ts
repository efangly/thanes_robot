import express,{ Express } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { MqttConn } from "./configs/MqttConf";
import NaviRouter from "./routes/Navigation";
import QueueRouter from "./routes/Queue";

const app:Express = express();

dotenv.config();
const port:number = parseInt(process.env.PORT as string, 10);

//middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan("dev"));

MqttConn.on('connect', () => {
  console.log("MQTT Connect");
  MqttConn.subscribe('test', (err:Error) => {
    if(err) console.log(err);
  });
});

//route
app.use('/api/navi',NaviRouter);
app.use('/api/queue',QueueRouter);

app.listen(port, () => console.log(`Start server in port ${port}`));