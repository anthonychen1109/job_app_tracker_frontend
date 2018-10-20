export const fetch_applications = () => {
  return fetch('http://localhost:8000/api/v1/applications', {
    method: "GET",
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`
    }
  })
    .then( r => r.json() )
}
