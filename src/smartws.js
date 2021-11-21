let { SmartAPI, WebSocket } = require("smartapi-javascript");
// Old websocket
const API_KEY = "8PcJjrTP";
const FEED_TOKEN = "0cf9c8de-71cd-4d12-863c-b516be316fe8";
const CLIENT_CODE = "AB1234";

let web_socket = new WebSocket({
  client_code: CLIENT_CODE,
  feed_token: FEED_TOKEN,
});

web_socket.connect().then(() => {
  web_socket.runScript("nse_cm|2885, mcx_fo|222900", "mw|sfi|dp|hb"); // SCRIPT: nse_cm|2885, mcx_fo|222900  TASK: mw|sfi|dp

  setTimeout(function () {
    web_socket.close();
  }, 3000);
});

web_socket.on("tick", receiveTick);

function receiveTick(data) {
  console.log("receiveTick:::::", data);
}

// let web_socket = new WebSocketClient({
//     clientcode: "CLIENT_CODE",
//     jwttoken: "jwt_token",
//     apikey: "smartapi_key",
//     feedtype: "order_feed",
// });

// web_socket.connect()
//     .then(() => {
//         web_socket.fetchData("ACTION_TYPE", "FEED_TYPE");  // ACTION_TYPE: subscribe | unsubscribe FEED_TYPE: order_feed

//         setTimeout(function () {
//             web_socket.close()
//         }, 60000)
//     });

// web_socket.on('tick', receiveTick);

// function receiveTick(data) {
//     console.log("receiveTick:::::", data);
// }
