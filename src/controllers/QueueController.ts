import { Request, Response } from "express";
import { MqttConn } from "../configs/MqttConf";
import dotenv from "dotenv";
dotenv.config();

const QueueList = (req:Request, res:Response) => {
  MqttConn.publish("test", "hello from NodeJS");
  res.json({
    msg: "ok"
  });
}

export {
  QueueList
};