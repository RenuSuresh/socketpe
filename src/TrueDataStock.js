import React, { useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import io from "socket.io-client";
import SockJS from "sockjs";
function TrueDataStock() {
  const trueData = () => {
    const user = "tdws150";
    const pwd = "shubham@150";
    const port = 8082;
    const symbols = ["INFY"];
    const client = new W3CWebSocket(
      `wss://push.truedata.in:${port}?user=${user}&password=${pwd}`
    );
    client.onopen = () => {
      console.log("WebSocket Client Connected");
      client.send(JSON.stringify({ method: "addsymbol", symbols: symbols }));
      client.onmessage = (e) => {
        console.log("message>>>", JSON.parse(e.data));
      };
    };
  };
  const java = () => {
    //   http://65c5-106-67-71-219.ngrok.io
    // const client = new W3CWebSocket(`ws://65c5-106-67-71-219.ngrok.io`);
    // var client = new SockJS("https://85cc-106-67-71-219.ngrok.io", _reserved, options);
    // var client = io.connect("https://85cc-106-67-71-219.ngrok.io");
    var client = new SockJS("https://85cc-106-67-71-219.ngrok.io");
    client.onopen = () => {
      console.log("WebSocket Client Connected");
      //   client.send(JSON.stringify({ method: "addsymbol", symbols: symbols }));
      client.onmessage = (e) => {
        console.log("message>>>", JSON.parse(e.data));
      };
    };
  };
  return (
    <div>
      <h1> True data</h1>
      <button onClick={trueData}>True data</button>
      <button onClick={java}>JAVA</button>
    </div>
  );
}

export default TrueDataStock;
