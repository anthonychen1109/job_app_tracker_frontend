export const fetch_user = (id) => {
  return fetch(`http://localhost:8000/api/v1/users/${id}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  })
  .then( r => r.json() )
}

export const fetch_current_user = () => {
  return fetch('http://localhost:8000/api/current_user/', {
    method: "GET",
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`
    }
  })
  .then( r => r.json() )
}
