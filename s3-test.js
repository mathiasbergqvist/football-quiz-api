const AWS = require('aws-sdk');
const S3 = new AWS.S3();

export async function main(event, context) {
  try {
    console.log(`Hi from Node.js ${process.version} on Lambda!`);
    // Converted it to async/await syntax just to simplify.
    const data = await S3.getObject({Bucket: "football-quiz-api-images", Key: "logo_33.png"}).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  }
  catch (err) {
    return {
      statusCode: err.statusCode || 400,
      body: err.message || JSON.stringify(err.message)
    };
  }
}