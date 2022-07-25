const { BASE_URL, ACCESS_TOKEN } = require("../helpers/Constant");

async function loginUser(credentials) {
  return fetch(`${BASE_URL}/user/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => {
    if (data.status !== 200) {
      return {message: "Wrong username or password"}
    }

    return data.json();
  });
}

async function registerUser(user) {
  return fetch(`${BASE_URL}/user/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((data) => {
    console.log("response reg", data)
    return data.json();
  });
}

function getAuthToken() {
  return localStorage.getItem(ACCESS_TOKEN); 
}

module.exports = {
  loginUser,
  registerUser,
  getAuthToken,
};
