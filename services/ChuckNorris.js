const parser = response =>
  (response.ok && response.json()) || Promise.reject(response)

const serialise = params =>
  !params ? '' : '?' + new URLSearchParams(params).toString()

export const API = (path, params) =>
  fetch(`https://api.chucknorris.io/jokes/${path}${serialise(params)}`).then(
    parser
  )

export default API
