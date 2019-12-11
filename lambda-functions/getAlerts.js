const axios = require("axios");

exports.handler = async event => {
  // TODO implement
  const CIHEndpoint = "https://if.cyberintelligencehouse.com/api";
  const CIHAPIKey = "YOUR CIH API Key";
  const profileId = "YOUR CIH PROFILE ID";
  const CIHHeaders = {
    accept: "application/json",
    "X-Api-Key": CIHAPIKey,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const config = {
    method: "get",
    url: `${CIHEndpoint}/alerts?profile_id=${profileId}`,
    headers: CIHHeaders
  };
  let alerts = [];
  try {
    const response = await axios.request(config);
    alerts = response.data.total;
  } catch (e) {
    console.log("error");
    console.log(e);
  }

  const response = {
    statusCode: 200,
    body: `Found a total of ${alerts.length} alerts`
  };
  return response;
};
