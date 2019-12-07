/**
 * This is a lambda function to fetch the CIH API.
 * It actually uses the node dependecies using the lamda layers
 */

const axios = require("axios");

exports.handler = async event => {
  const CIHEndpoint = "https://if.cyberintelligencehouse.com/api";
  const attr = event.Records[0].attributes;
  const CIHAPIKey = attr.CIHAPIKey;
  const CIHHeaders = {
    accept: "application/json",
    "X-Api-Key": CIHAPIKey,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const config = {
    method: "get",
    url: `${CIHEndpoint}/profiles`,
    headers: CIHHeaders
  };
  let profileCount = 0;
  try {
    const response = await axios.request(config);
    profileCount = response.data.total;
  } catch (e) {
    console.log("error");
    console.log(e);
  }

  const response = {
    statusCode: 200,
    body: `Found a total of ${profileCount} profiles`
  };
  return response;
};
