const { getHttpClient: http, getHttpClientPublic: httpPublic} = require("./httpClient");

async function listAllCategory() {
  return http()
    .get(`/category/`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log("Error - listAllCategory", e);
      return { message: e.response.data.message };
    });
}

async function addCategory(input) {
  return http()
    .post(`/category`, { name: input })
    .then((res) => {
      if (res.status !== 200) {
        console.log("addCategory", res);
        return { message: res.data.message };
      }

      return res.data;
    })
    .catch((e) => {
      console.log("Ada error nih", e);
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

async function listAllCategoryPagePublic(page) {
  return httpPublic()
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

async function deleteCategory(id) {
  return http()
    .delete(`/category/${id}`)
    .then((res) => {
      console.log('deleteCategory', res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

async function getCategoryDetails(id) {
  return http()
    .get(`/category/${id}`)
    .then((res) => {
      console.log('getCategoryDetails', res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

async function updateCategory(id, categoryName) {
  return http()
    .put(`/category/${id}`, { name: categoryName })
    .then((res) => {
      console.log('deleteCategory', res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = {
  listAllCategory,
  addCategory,
  listAllCategoryPage,
  deleteCategory,
  getCategoryDetails,
  updateCategory,
  listAllCategoryPagePublic
};
