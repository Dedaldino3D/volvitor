import socketIO from "socket.io-client";

const websocketEndpoint = "ws://localhost:8000";

let socketInstance: SocketConnection = null;

class SocketConnection {
  isSocketConnected: boolean = false;
  socket: SocketIOClient.Socket;
  message: Array<object> = [];
  settings: object | any;

  constructor(settings: any) {
    this.settings = settings;
    this.message = [];
    this.socket = initializeSocketConnection();
    if (this.socket) this.isSocketConnected = true;
    this.initializeSocketEvents();
  }

  initializeSocketEvents = () => {
    this.socket.on("connect", () => {
      console.log("socket connected");
    });

    this.socket.on("user-disconnected", (userID: string | number) => {
      console.log("user disconnected: ", userID);
    });

    this.socket.on("disconnect", () => {
      console.log("socket disconnected");
    });

    this.socket.on("error", (err: Error) => {
      console.log("socket error --", err);
    });
    this.socket.on("new-broadcast-message", (data: any) => {
      this.message.push(data);
    });
  };

  broadcastMessage = (message: Object) => {
    this.message.push(message);
    this.socket.emit("broadcast-message", message);
  };
}

const initializeSocketConnection = () => {
  return socketIO.connect(websocketEndpoint, {
    secure: true,
    reconnection: true,
    rejectUnauthorized: false,
    reconnectionAttempts: 10,
  });
};

export function createSocketInstance(settings: {}) {
  return (socketInstance = new SocketConnection(settings));
}
