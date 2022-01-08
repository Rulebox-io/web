const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require('md5')

module.exports = class ConvertKitClient {

  /**
   * Constructs a new ConverKit client instance.
   * @param {string} apiKey The API key to use.
   */
  constructor(apiKey, serverPrefix) {
    this.apiKey = apiKey
    this.serverPrefix = serverPrefix
  }


  // Public functions
  // ================
  /**
   * Adds a subscriber to an audience. This function calls the MailChimp API to
   * add a subscriber to the audience with the specified name.
   * @param {string} subscriber The subscriber's email.
   * @param {string} audience The audience name
   */
  async addSubscriberToAudience(subscriber, audience) {
    mailchimp.setConfig({
      apiKey: this.apiKey,
      server: this.serverPrefix,
    })

    try {
      console.log(subscriber)
      console.log(audience)

      const hash = md5(subscriber.toLowerCase())
      await mailchimp.lists.setListMember(
        audience,
        hash,
        {
          email_address: subscriber,
          status_if_new: "subscribed"
        }
      );

      const tag = await mailchimp.lists.updateListMemberTags(
        audience,
        hash,
        { tags: [{ name: "Beta Programme", status: "active" }] }
      );
      console.log(tag);

      /*
      const response = await mailchimp.lists.addListMember(audience, {
        email_address: subscriber,
        status: "subscribed"
      });
      console.log(response)
      */
      return { "status": "ok", email: subscriber }

    } catch (err) {
      console.error(err)
      if (undefined === err.status) return { status: "fail" }
      switch (err.response.status) {
        case 400:
          // TODO: Log this?
          return { status: "bad_request" }

        default:
          // TODO: Log this?
          return { status: "fail" }
      }
    }

    /*
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
    */
  }
}