/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

This sample is part of the SDK for JavaScript Developer Guide (scheduled for release September 2020) topic at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-creating-buckets.html.

Purpose:
s3_listbuckets.js demonstrates how to list all the buckets in an AWS account.

Inputs:
- REGION (into command line below)
- BUCKET_NAME (into command line below)

Running the code:
node s3_listobjects.js REGION
*/
// snippet-start:[s3.JavaScript.v3.buckets.listBuckets]

// Import required AWS SDK clients and commands for Node.js
const { S3 } = require("@aws-sdk/client-s3");
// Set the AWS region
const region = process.argv[2];
// Create S3 service object
const s3 = new S3(region);

async function run() {
  try {
    const data = await s3.listBuckets({});
    console.log('Success', data.Buckets);
  }
  catch (err) {
    console.log('Error', err);
  }
};
run();
// snippet-end:[s3.JavaScript.v3.buckets.listBuckets]
//for unit tests only
exports.run = run;

