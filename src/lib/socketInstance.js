import { socketURL } from "@/apis/apiUrl";
import { io } from "socket.io-client";
let connection = io(socketURL);
export const socketConn = connection.connect();
