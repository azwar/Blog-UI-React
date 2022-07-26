import LayoutAdmin from "../../../layout/layout_admin";
import ManagePost from "../../../components/manage_post";
import { useEffect, useState } from "react";
import { listAllCategory } from "../../../services/category";
import { addPost, getPostDetails, updatePost } from "../../../services/post";
import { useRouter } from "next/router";

export default function Admin({ Component, pageProps }) {
  const router = useRouter();
  const { id } = router.query;
  const [isPublish, setIsPublish] = useState(true);
  const [title, setTitle] = useState();
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState();
  const [selectedCategory, setselectedCategory] = useState(0);

  useEffect(() => {
    listAllCategory().then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    if (id) {
      getPostDetails(id)
        .then((res) => {
          const blogPost = res.data;
          fillForm(blogPost);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogPost = {
      title: title,
      category: {
        id: selectedCategory,
      },
      body: content,
      status: isPublish,
    };

    updatePost(id, blogPost).then((res) => {
      if (res.success) {
        router.push("/admin");
      }
    });
  };

  const fillForm = (postData) => {
    const { title, category, body, status } = postData;
    const categoryId = category.id;

    setTitle(title);
    setselectedCategory(categoryId);
    setContent(body);
    setIsPublish(status);
  };

  return (
    <LayoutAdmin>
      <div className="p-10 mb-12 rounded-lg flex flex-col justify-center self-center w-6/12">
        <div className="font-bold mb-8 text-lg">
          <h1>Edit post</h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="form-group mb-6 w-full">
            <input
              type="text"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
            />
          </div>
          <div className="form-group mb-6">
            <select
              className="select select-bordered w-full max-w-xs"
              id="category"
              value={selectedCategory}
              onChange={(e) => setselectedCategory(e.target.value)}
            >
              <option value={0}>- Category</option>
              {categories.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                    selected={item.id === selectedCategory}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="body"
              rows="3"
              placeholder="Content body"
              onChange={(e) => setContent(e.target.value)}
              defaultValue={content}
            ></textarea>
          </div>
          <div className="form-group form-check mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="status"
              checked={isPublish}
              onChange={(e) => setIsPublish(e.target.checked)}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="status"
            >
              Set as published
            </label>
          </div>
          <button
            type="submit"
            className="
              w-3/12
              justify-center
              justify-self-center
              mt-4
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
          >
            Save
          </button>
        </form>
      </div>
    </LayoutAdmin>
  );
}
