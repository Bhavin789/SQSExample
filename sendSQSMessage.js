var AWS = require("aws-sdk");
AWS.config.loadFromPath("./config.json");

// Create SQS service object
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

var params = {
  DelaySeconds: 10,
  MessageAttributes: {
    CIHAPIKey: {
      DataType: "String",
      StringValue: "dbehudgewdhewdhidewgd3276e28etf643er43deh3d38d"
    },
    domain: {
      DataType: "String",
      StringValue: "flipkart"
    }
  },
  MessageBody: "Checking up the CIH SQS Queue",
  QueueUrl: "https://sqs.us-east-1.amazonaws.com/275396233496/CIHQueue"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});
