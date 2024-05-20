console.log('Hello World');

// Example JavaScript code with a hardcoded AWS secret access key

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// Hardcoded AWS secret access key (for demonstration purposes only)
const awsAccessKeyId = 'AKIAIOSFODNN7EXAMPLE';
const awsSecretAccessKey = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

AWS.config.update({
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  region: 'us-west-2'
});

async function listBuckets() {
  try {
    const result = await s3.listBuckets().promise();
    console.log(result.Buckets);
  } catch (error) {
    console.error('Error listing buckets:', error);
  }
}

listBuckets();

