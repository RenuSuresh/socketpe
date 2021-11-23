let { SmartAPI, WebSocket } = require("smartapi-javascript");

let web_socket = new WebSocket({
  client_code: "AB1234",
  feed_token: "0cf9c8de-71cd-4d12-863c-b516be316fe8",
});

web_socket.connect().then(() => {
  web_socket.runScript("nse_cm|TCS", "mw"); // SCRIPT: nse_cm|2885, mcx_fo|222900  TASK: mw|sfi|dp
});

web_socket.on("tick", receiveTick);

function receiveTick(data) {
  console.log("receiveTick:::::", data);
}
