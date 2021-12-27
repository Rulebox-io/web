const axios = require("axios")

const CONVERTKIT_API_URL_BASE = "https://api.convertkit.com/v3"

module.exports = class ConvertKitClient {

  /**
   * Constructs a new ConverKit client instance.
   * @param {string} apiKey The API key to use.
   */
  constructor(apiKey) {
    this.apiKey = apiKey
  }


  // Public functions
  // ================
  /**
   * Adds a subscriber to a sequence. This function calls the ConvertKit API to
   * add a subscriber to a sequence with the specified ID.
   * @param {string} subscriber The subscriber's email.
   * @param {string} sequenceId The sequence ID
   */
  async addSubscriberToSequence(subscriber, sequenceId) {
    const url = `${CONVERTKIT_API_URL_BASE}/sequences/${sequenceId}/subscribe`
    const payload = {
      api_key: this.apiKey,
      email: subscriber
    }

    try {
      const result = await axios.post(
        url,
        JSON.stringify(payload),
        {
          headers: { "content-type": "application/json" }
        })

      return { "status": "ok", ...result.data }

    } catch (err) {
      if (!err.response) return { status: "fail" }
      switch (err.response.status) {
        case 400:
          return { status: "bad_request", message: err.response.data && err.response.data.message }
        default:
          console.log(err.response.data)
          return { status: "fail" }
      }
    }
  }
}