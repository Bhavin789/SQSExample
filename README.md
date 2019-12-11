# SQSExample

This repo holds basic implementation of an SQS queue in NodeJS

- Add your CIH_API_KEY in the `/lambda-functions/fetchCIHProfiles.js` file.
- Add your SQS Queue URL in the `/sendSQSMessage.js` file.

The lambda-functions folder is used to keep the lambda functions there on the AWS. Would ultimately move to S3 bucket from here.

All the lambda functions now use version 3 of the lambda layer created and an postgresql RDS instance to store the results.
