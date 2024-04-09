import PropTypes from 'prop-types'
// import {useState} from 'react'

/**
 * Creates a custom token for the given user ID.
 *
 * @param {string} uid - The user ID.
 * @returns {Promise<void>} - A promise that resolves when the custom token is created.
 */
const createCustomToken = async uid => {
  console.log('uid', uid) // Need to remove this line

  // const [token, setToken] = useState(null)

  const fetchUrl = 'https://helloworld-l6xwtopn4a-uc.a.run.app'
  const headers = {'Content-Type': 'application/json'}

  let token = null

  try {
    console.log(
      'FeEEEEEETCHHHH ========== FeEEEEEETCHHHHFeEEEEEETCHHHHFeEEEEEETCHHHH',
    )
    const res = await fetch(fetchUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({uid: uid}),
    })

    if (
      res.ok &&
      res.headers.get('Content-Type')?.includes('application/json')
    ) {
      const response = await res.json()

      console.log('response', response?.data) // Need to remove this line
      token = response?.data
      return response?.data

      // setToken(response?.data)
    } else {
      token = await res.text()
      console.log('A non-JSON response was received:', await res.text())
      return res.text()
    }
  } catch (error) {
    console.error(error)
  }
  return token
}

createCustomToken.propTypes = {
  uid: PropTypes.string.isRequired,
}

export default createCustomToken
