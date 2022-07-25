const { default: axios } = require("axios");
const { BASE_URL } = require("../helpers/Constant");
const { getAuthToken } = require("./auth");

function getHttpClient() {
  const token = getAuthToken();
  let client = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (token) {
    client = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } 

  return client;
}

module.exports = {
    getHttpClient,
}