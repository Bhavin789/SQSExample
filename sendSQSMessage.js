var AWS = require("aws-sdk");
AWS.config.loadFromPath("./config.json");

// Create SQS service object
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

var params = {
  DelaySeconds: 10,
  MessageAttributes: {},
  MessageBody: "Fetch CIH profile count",
  QueueUrl: "YOUR SQS QUEUE"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});
