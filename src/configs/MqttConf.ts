import { connect,MqttClient } from "mqtt";
import dotenv from "dotenv";
dotenv.config();

const MqttConn:MqttClient = connect({
  host: String(process.env.MQTT_SERVER),
  port: parseInt(String(process.env.MQTT_PORT)),
  username: String(process.env.MQTT_USER),
  password: String(process.env.MQTT_PASSWORD)
});

export { MqttConn };