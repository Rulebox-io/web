import axios from "axios"

export const state = () => ({
  signupState: null
})

export const getters = {
  /**
   * Retrieves the value for 'dark mode', or the default value if no value was specified by the user.
   * @param {State} state The Vuex state.
   * @returns The value for 'dark mode'.
   */
  hasSignedUp: state => {
    return state.signupState === "signed-up"
  }
}

export const mutations = {
  /**
   * Updates the user preference for 'signupState'.
   * @param {State} state The Vuex state.
   * @param {boolean} newValue The new value for 'signupState'.
   */
  setSignupState(state, newValue) { state.signupState = newValue },

  toggleSignup(state) {
    state.signupState = state.signupState === 'signed-up' ? null : 'signed-up'
  }
}

export const actions = {
  /**
   * Signs the user up to Rulebox.
   * @param {Context} The Vuex context. 
   * @param {*} payload The payload.
   */
  async signup(ctx, payload) {

    const url = `${process.env.RBX_WEB_API_URL}/signup`
    const body = { email: payload }

    ctx.commit("setSignupState", 'signing-up')

    try {
      await axios.post(url, JSON.stringify(body), {
        headers: { 'content-type': 'application/json' },
      })

      ctx.commit("setSignupState", 'signed-up')
    } catch (err) {
      ctx.commit("setSignupState", 'error')
    }
  }
}

