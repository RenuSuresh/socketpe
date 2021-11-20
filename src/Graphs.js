import React, { useEffect } from "react";
import { Socket } from "socket.io-client";
import io from "socket.io-client";

function Graphs() {
  const user = "tdws150";
  const pwd = "shubham@150";
  const port = 8084;
  const symbols = ["INFY"];
  useEffect(() => {
    // Data();

    // const socket = io.connect(
    //   `wss://push.truedata.in:${port}?user=${user}&password=${pwd}`,
    //   {
    //     autoConnect: "true",
    //     query: {
    //       symbols,
    //     },
    //   }
    // );
    const socket = io(
      `wss://push.truedata.in:${port}?user=${user}&password=${pwd}`
    );
    socket.on("connect", () => {
      // either with send()
      socket.send("Hello!");

      // or with emit() and custom event names
      socket.emit(
        "salutations",
        "Hello!",
        { mr: "john" },
        Uint8Array.from([1, 2, 3, 4])
      );
    });

    // console.log("socket>>>>", socket);

    // if (socket.connected) {
    //   console.log("connected with devices");
    // } else if (socket.disconnected) {
    //   console.log("Disconnected ");
    // }
    // socket.on("bar", (data) => {
    //   console.log("🚀😄 ~ file: Home.js ~ line 40 ~ useEffect ~ data", data);
    // });
  }, []);

  return <div>in graphs</div>;
}

export default Graphs;
