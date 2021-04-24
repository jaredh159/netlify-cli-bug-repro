import { Handler } from '@netlify/functions';
import { S3 } from '@aws-sdk/client-s3';

const handler: Handler = async (event) => {
  // Omitted: actually doing something with the S3 Client
  // but this line causes `netlify dev` to break
  const client = new S3({});

  return {
    statusCode: 200,
    body: `Hello world`,
  };
};

export { handler };
