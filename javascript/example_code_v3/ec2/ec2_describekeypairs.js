/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This sample is part of the SDK for JavaScript Developer Guide (scheduled for release September 2020) topic at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ec2-example-key-pairs.html

Purpose:
ec2_describekeypairs.js demonstrates how to retrieve information about one or more key pairs.

Inputs:
- REGION (into command line below)

Running the code:
node ec2_describekeypairs.js REGION
 */
// snippet-start:[ec2.JavaScript.v3.keypairs.describeKeyPair]
// Import required AWS SDK clients and commands for Node.js
const {EC2, DescribeKeyPairsCommand} = require("@aws-sdk/client-ec2");
// Set the AWS region
const region = process.argv[2];
// Create EC2 service object
const ec2client = new EC2(region);

async function run(){
   try {
      const data = await ec2client.send(new DescribeKeyPairsCommand({}));
      console.log("Success", JSON.stringify(data.KeyPairs));
   }
   catch(err){
      console.log("Error", err);
   }
};
run();
// snippet-end:[ec2.JavaScript.v3.keypairs.describeKeyPair]
exports.run = run; //for unit tests only
