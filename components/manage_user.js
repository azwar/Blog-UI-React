import { GlobeAltIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { listAllUser, deleteUser } from "../services/user";

export default function ManageUser() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listAllUser(page).then((res) => {
      if (res.data) {
        const listUsers = res.data;
        console.log('listUsers', listUsers)
        setUsers(res.data);
      }
    });
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteUser(id);

    if (res.success) {
      const tmp = users.filter(function (item) {
        return item.id != id;
      });
      setUsers(tmp);
    }
  };

  const formatRole = (arrRole) => {
    const strRole = ''
    arrRole.map(item => {
      strRole = strRole + item.name + ', '
    })

    return strRole;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="w-5/12">Title</th>
            <th className="w-2/12">Category</th>
            <th className="w-2/12">Author</th>
            <th className="w-3/12">Role</th>
            <th className="w-1/12">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{formatRole(item.roles)}</td>
                <td className="flex flex-row">
                  <a
                    className="p-2 mx-1 hover:text-blue-700"
                    href="#"
                    onClick={() => handleDelete(item.id)}
                  >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    className="p-2 mx-1 hover:text-blue-700"
                    href={`/admin/user/${item.id}`}
                  >
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
