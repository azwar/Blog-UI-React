import { GlobeAltIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { deleteCategory, listAllCategoryPage } from "../services/category";

export default function ManageCategory() {
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    listAllCategoryPage(page).then((res) => {
      if (res.data) {
        setCategories(res.data);
      }
    });
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteCategory(id)

    if (res.success) {
      const tmp = categories.filter(function (item) {
        return item.id != id;
      });
      setCategories(tmp);
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="w-2/12">Category Name</th>
            <th className="w-2/12">Date created</th>
            <th className="w-1/12">Action</th>
          </tr>
        </thead>
        <tbody>
        {categories.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.createDate}</td>
                <td className="flex flex-row">
                  <a className="p-2 mx-1 hover:text-blue-700" href="#" onClick={() => handleDelete(item.id)} >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a className="p-2 mx-1 hover:text-blue-700" href={`/admin/category/${item.id}`}>
                    <PencilAltIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
