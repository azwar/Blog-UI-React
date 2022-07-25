import { GlobeAltIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { deletePost, listAllPost } from "../services/post";

export default function ManagePost() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listAllPost(page).then((res) => {
      if (res.data) {
        setPosts(res.data);
      }
    });
  }, []);

  const handleDeletePost = async (id) => {
    const res = await deletePost(id)

    if (res.success) {
      const tmpPost = posts.filter(function (item) {
        return item.id != id;
      });
      setPosts(tmpPost);
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="w-5/12">Title</th>
            <th className="w-2/12">Category</th>
            <th className="w-2/12">Author</th>
            <th className="w-2/12">Date created</th>
            <th className="w-1/12">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category.name}</td>
                <td>{item.user.username}</td>
                <td>{item.createDate}</td>
                <td className="flex flex-row">
                  <a className="p-2 mx-1 hover:text-blue-700" href="#" onClick={() => handleDeletePost(item.id)} >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a className="p-2 mx-1 hover:text-blue-700" href={`/admin/post/${item.id}`}>
                    <PencilAltIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a className="p-2 mx-1 hover:text-blue-700">
                    <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
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
