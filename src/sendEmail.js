// Sends form data to the company inbox using Web3Forms (https://web3forms.com).
// The email goes to the address the access key was created with (tvt25740@gmail.com).
// The key goes in a .env file:  VITE_WEB3FORMS_KEY=your-key-here

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export async function sendEmail(subject, fields) {
  if (!ACCESS_KEY) {
    throw new Error('Missing VITE_WEB3FORMS_KEY in .env')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: subject,
      from_name: 'Brilliant Snow Removal website',
      ...fields,
    }),
  })

  const result = await response.json()

  if (!result.success) {
    throw new Error(result.message || 'Could not send the message')
  }
}
