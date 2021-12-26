
const headers = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': 'http://localhost:3033',
  'Access-Control-Allow-Headers': 'Content-Type, authorization',
  'Access-Control-Allow-Methods': 'POST'
};

const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "OPTIONS": { return { statusCode: 200, headers } }
      case "POST": {

        // Email is a required field.
        if (!event.body) { return { statusCode: 400, headers, body: "Missing body" } }
        const payload = JSON.parse(event.body)
        if (!payload.email) { return { statusCode: 400, headers, body: "Missing `Email` field." } }

        // Sign the user up using ConvertKit...

        // Return the user.
        return {
          statusCode: 200,
          body: JSON.stringify(payload.email),
        }
      }

      default: { return { statusCode: 405, headers } }

    }
  } catch (error) {
    return { statusCode: 500, headers, body: error.toString() }
  }
}

module.exports = { handler }
