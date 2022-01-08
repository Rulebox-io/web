
// const ConvertKitClient = require("../../../service/convert-kit")
const MailChimpClient = require("../../../service/mailchimp")

const headers = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': 'http://localhost:3033',
  'Access-Control-Allow-Headers': 'Content-Type, authorization',
  'Access-Control-Allow-Methods': 'POST'
};

// const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
// const CONVERTKIT_SEQUENCE_ID = process.env.CONVERTKIT_SEQUENCE_ID
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER
const MAILCHIMP_AUDIENCE = process.env.MAILCHIMP_AUDIENCE_ID

// eslint-disable-next-line require-await
const handler = async (event) => {

  console.log(`${event.httpMethod} /signup`)

  try {
    switch (event.httpMethod) {
      case "OPTIONS": { return { statusCode: 200, headers } }
      case "POST": {

        // Email is a required field.
        if (!event.body) { return { statusCode: 400, headers, body: "Missing body" } }
        const payload = JSON.parse(event.body)
        if (!payload.email) { return { statusCode: 400, headers, body: "Missing `Email` field." } }

        console.log(`Signing up ${payload.email}`)

        // Sign the user up using ConvertKit...
        const result = await new MailChimpClient(MAILCHIMP_API_KEY, MAILCHIMP_SERVER).addSubscriberToAudience(payload.email, MAILCHIMP_AUDIENCE)
        // const result = await new ConvertKitClient(CONVERTKIT_API_KEY).addSubscriberToSequence(payload.email, CONVERTKIT_SEQUENCE_ID)

        switch (result.status) {
          case "ok":
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify({ status: "ok" }),
            }

          case "bad_request":
            return {
              statusCode: 400,
              headers,
              body: JSON.stringify(result),
            }

          default:
            return {
              statusCode: 500,
              headers,
              body: JSON.stringify(result),
            }
        }
      }

      default: { return { statusCode: 405, headers } }

    }
  } catch (error) {
    return { statusCode: 500, headers, body: error.toString() }
  }
}

module.exports = { handler }
