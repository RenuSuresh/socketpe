import "./App.css";
import io from "socket.io-client";
import React, { useState, useEffect } from "react-dom";
// import "./trueData";
// import Graphs from "./Graphs";
import { w3cwebsocket as W3CWebSocket } from "websocket";

// const socket = io.connect("backend base url");
function App() {
  const user = "tdws150";
  const pwd = "shubham@150";
  const port = 8082;
  const symbols = ["INFY"];
  const client = new W3CWebSocket(
    `wss://push.truedata.in:${port}?user=${user}&password=${pwd}`
  );
  client.onopen = () => {
    console.log("WebSocket Client Connected");
    client.send(JSON.stringify({ method: "addsymbol", symbols: ["INFY"] }));
    client.onmessage = (e) => {
      console.log("message>>>", JSON.parse(e.data));
    };
  };
  // client.send('symbol')

  // client.onmessage = (e) => {
  //   console.log("event>>>>", e);
  // };
  return (
    <div className="App">
      app
      {/* <Graphs /> */}
    </div>
  );
}

export default App;
