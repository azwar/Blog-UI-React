import { ChevronDownIcon, MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { listAllCategoryPagePublic } from "../services/category";

export default function LayoutPublic({ children }) {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    listAllCategoryPagePublic(1).then((res) => {
      if (res?.data) {
        setCategories(res.data);
      }
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="navbar bg-blue-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <MenuIcon className="h-5 w-5 group-hover:text-teal-200" />
            </label>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SimpleBlog</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="/admin">Home</a>
            </li>
            <li tabIndex={2}>
              <a>
                Category
                <ChevronDownIcon className="h-5 w-5 group-hover:text-teal-200" />
              </a>
              <ul className="p-2 bg-blue-800 z-10">
                {categories?.map((item) => (
                  <li>
                    <a href={`/post/category/${item.name}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <main className="card bg-base-100 mx-4 my-8">{children}</main>
    </div>
  );
}
