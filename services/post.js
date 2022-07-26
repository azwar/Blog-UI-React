const { default: axios } = require("axios");
const { BASE_URL, ACCESS_TOKEN } = require("../helpers/Constant");
const { getHttpClient: http, getHttpClientPublic: httpPublic } = require("./httpClient");

async function listAllPost(page) {
  return http().get(`${BASE_URL}/post/all?page=${page}`)
    .then((res) => {
      if (res.status !== 200) {
        return { message: res.data.message };
      }

      return res.data;
    })
    .catch(e => {
      const message = e?.response?.data?.message

      if (message && message.includes("Expired")) {
        console.log("message", message)
        console.log("Reset jwt", (message.includes("Expired")))
        localStorage.removeItem(ACCESS_TOKEN);

        throw 'must_login'
      } else {
        throw e.response
      }
    });
}

async function deletePost(id) {
  return http().get(`/post/delete/${id}`)
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log(e)
  });
}

async function addPost(postInput) {
  return http().post(`/post/`, postInput)
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log(e)
  });
}

async function getPostDetails(id) {
  return http().get(`/post/details/${id}`)
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log(e)
  });
}

async function updatePost(id, postInput) {
  return http().put(`/post/update/${id}`, postInput)
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log(e)
  });
}

async function getPostDetailsPublic(id) {
  return httpPublic().get(`/post/details/${id}`)
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log(e)
  });
}

async function listAllPostPublic(page) {
  return httpPublic().get(`${BASE_URL}/post/?page=${page}`)
  .then((res) => {
    if (res.status !== 200) {
      return { message: res.data.message };
    }

    return res.data;
  })
  .catch(e => {
    console.error('Error list post', e)
  });
}

module.exports = {
  listAllPost,
  deletePost,
  addPost,
  getPostDetails,
  updatePost,
  getPostDetailsPublic,
  listAllPostPublic
};
