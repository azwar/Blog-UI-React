const { getHttpClient: http } = require("./httpClient");

async function listAllUser() {
  return http()
    .get(`/user/`)
    .then((res) => {
      console.log(res)
      if (res.status !== 200) {
        return { message: res.data.message };
      }

      return res.data;
    })
    .catch((e) => {
      console.log("Adios error nih", e);
    });
}

async function addUser(input) {
  return http()
    .post(`/user/add`, input)
    .then((res) => {
      console.log("addUser", res);

      return res.data;
    })
    .catch((e) => {
      console.log("Ada error nih", e);

      throw e.response.data
    });
}

async function listAllCategoryPage(page) {
  return http()
    .get(`/category/`, { params: { page: page } })
    .then((res) => {
      console.log("listAllCategoryPage", res);
      if (res.status !== 200) {
        return { message: res.data.message };
      }

      return res.data;
    })
    .catch((e) => {
      console.log("Adios error nih", e);
    });
}

async function deleteUser(id) {
  return http()
    .get(`/user/delete/${id}`)
    .then((res) => {
      console.log('deleteUser', res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

async function getUserDetails(id) {
  return http()
    .get(`/user/details/${id}`)
    .then((res) => {
      console.log('getUserDetails', res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

async function updateUser(id, user) {
  return http()
    .post(`/user/update/${id}`, user)
    .then((res) => {
      console.log('updateUser', res);
      return res.data;
    })
    .catch((e) => {
      console.log('ada error updateUser', e.response)
      throw e.response.data
    });
}

module.exports = {
  listAllUser,
  deleteUser,
  getUserDetails,
  addUser,
  updateUser
};
