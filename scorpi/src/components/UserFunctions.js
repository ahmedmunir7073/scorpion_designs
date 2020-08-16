import axios from 'axios'


export const register = newUser => {
  return axios
    .post('users/register', {
      username: newUser.username,
      phone: newUser.phone,
      address: newUser.address,
      city: newUser.city,
      state: newUser.state,
      bio: newUser.bio,
      country: newUser.country,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const updateRec = user => {
  return axios  
    .put('users/:id', {
      username: user.username,
      phone: user.phone,
      address: user.address,
      city: user.city,
      state: user.state,
      bio: user.bio,
      country: user.country,
      email: user.email,
    })
    .then(response => {
      console.log('Updated')
    })
}




export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

  

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


