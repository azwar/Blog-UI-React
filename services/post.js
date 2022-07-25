const { default: axios } = require("axios");
const { BASE_URL, ACCESS_TOKEN } = require("../helpers/Constant");
const { getHttpClient: http } = require("./httpClient");

async function listAllPost(page) {
  const token = localStorage.getItem(ACCESS_TOKEN)
  return fetch(`${BASE_URL}/post/all?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((data) => {
    if (data.status !== 200) {
      return { message: data.message };
    }

    return data.json();
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

module.exports = {
  listAllPost,
  deletePost,
  addPost,
  getPostDetails,
  updatePost
};
