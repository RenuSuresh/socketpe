import React, { useEffect } from "react";
import axios from "axios";
let { SmartAPI, WebSocket } = require("smartapi-javascript");

function App() {
  useEffect(() => {
    let smart_api = new SmartAPI({
      api_key: "XZWPC1x2",
    });
    smart_api
      .generateSession("AB1234", "Abhi@1234")
      .then((data) => {
        return smart_api.getProfile();
      })
      .then((data) => {
        // Profile details
      })
      .catch((ex) => {
        //Log error
      });
  });
  const getToken = () => {
    const data = JSON.stringify({
      clientcode: "871739349",
      password: "Abhi@1234",
    });
    var config = {
      method: "post",
      url: "https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-PrivateKey": "XZWPC1x2",
        "X-ClientLocalIP": "192.168.0.106",
        "X-ClientPublicIP": "103.157.7.7",
        "X-MACAddress": "fe80::e170:c9e0:f29d:56da",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getTokenSmart = () => {
    let smart_api = new SmartAPI({
      api_key: "XZWPC1x2",
    });

    smart_api
      .generateSession("AB1234", "Abhi@1234")
      .then((data) => {
        return smart_api.getProfile();
      })
      .then((data) => {
        console.log("data>>>>", data);
        // Profile details
      })
      .catch((ex) => {
        //Log error
      });
  };
  return (
    <div>
      <button onClick={getToken}>Generate token</button>
    </div>
  );
}

export default App;
