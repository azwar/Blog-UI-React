import LayoutAdmin from "../../../layout/layout_admin";
import { useEffect, useState } from "react";
import { updateCategory, getCategoryDetails } from "../../../services/category";
import { useRouter } from "next/router";

export default function Admin({ Component, pageProps }) {
  const router = useRouter();
  const { id } = router.query;
  const [categoryName, setCategoryName] = useState('')
  
  useEffect(() => {
    if (id) {
      getCategoryDetails(id)
        .then((res) => {
          const name = res.name;
          setCategoryName(name);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault()

    updateCategory(id, categoryName).then(res => {
      if (res.success) {
        router.push('/admin/category')
      }
    })
  }

  return (
    <LayoutAdmin>
      <div className="p-10 mb-12 rounded-lg flex flex-col justify-center self-center w-6/12">
        <div className="font-bold mb-8 text-lg">
          <h1>Update category</h1>
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
              id="name"
              placeholder="Category name"
              onChange={e => setCategoryName(e.target.value)}
              defaultValue={categoryName}
            />
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
