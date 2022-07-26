import { ChevronDownIcon, MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { ACCESS_TOKEN } from "../helpers/Constant";

export default function LayoutAdmin({ children }) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      router.replace("/login");
    } else {
      setIsLogin(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    router.replace("/login");
  };

  const logedinLayout = (
    <div className="flex flex-col">
      <div className="navbar bg-red-800 text-white">
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
              <a href="/admin">Dashboard</a>
            </li>
            <li tabIndex={1}>
              <a>
                Post
                <ChevronDownIcon className="h-5 w-5 group-hover:text-teal-200" /> 
              </a>
              <ul className="p-2 bg-red-800 z-10">
                <li>
                  <a href="/admin/add_post">Add</a>
                </li>
                <li>
                  <a href="/admin">Manage</a>
                </li>
              </ul>
            </li>
            <li tabIndex={2}>
              <a>
                Category
                <ChevronDownIcon className="h-5 w-5 group-hover:text-teal-200" /> 
              </a>
              <ul className="p-2 bg-red-800 z-10">
                <li>
                  <a href="/admin/add_category">Add</a>
                </li>
                <li>
                  <a href="/admin/category">Manage</a>
                </li>
              </ul>
            </li>
            <li tabIndex={3}>
              <a>
                User
                <ChevronDownIcon className="h-5 w-5 group-hover:text-teal-200" /> 
              </a>
              <ul className="p-2 bg-red-800 z-10">
                <li>
                  <a href="/admin/add_user">Add</a>
                </li>
                <li>
                  <a href="/admin/users">Manage</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={4} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-white">
                <img src="/images/avatar.png" />
              </div>
            </label>
            <ul
              tabIndex={5}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-red-800"
            >
              <li>
                <a className="justify-between" href="/profile">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main className="card bg-base-100 shadow-md mx-4 my-8">{children}</main>
    </div>
  )
  
  const emptyLayout = (<div></div>);

  return (
    isLogin? (logedinLayout) : (emptyLayout)
  )
}
