import LayoutAdmin from "../../../layout/layout_admin";
import ManagePost from "../../../components/manage_post";
import { useEffect, useState } from "react";
import { listAllCategory } from "../../../services/category";
import { getUserDetails, updateUser } from "../../../services/user";
import { useRouter } from "next/router";
import { ErrorMessage } from "../../../components/error_message";

export default function Admin({ Component, pageProps }) {
  const router = useRouter();
  const { id } = router.query;
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      getUserDetails(id)
        .then((res) => {
          console.log("getUserDetails res", res);
          const user = res.data;
          fillForm(user);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password.length === 0 ? null : password,
      isAdmin: isAdmin,
    };

    console.log('user', user)

    updateUser(id, user)
      .then((res) => {
        if (res.success) {
          router.push("/admin/users");
        }
      })
      .catch((e) => {
        console.log(e)
        if (e.messages) {
          setError(e.messages);
        }
      });
  };

  const fillForm = (data) => {
    const { email, username, name, roles } = data;
    const arrName = name.split(" ");
    const fName = arrName.length > 0 ? arrName[0] : "";
    const lName = name.replace(fName + " ", "");

    roles.map((item) => {
      if (item.name === "ROLE_ADMIN") {
        setIsAdmin(true);
      }
    });

    setEmail(email);
    setUsername(username);
    setName(name);
    setFirstName(fName);
    setLastName(lName);
    setRoles(roles);
  };

  return (
    <LayoutAdmin>
      <div className="p-10 mb-12 rounded-lg flex flex-col justify-center self-center w-6/12">
        <div className="font-bold mb-8 text-lg">
          <h1>Update user</h1>
        </div>
        {error ? <ErrorMessage error={error} /> : <div></div>}
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
              id="firstName"
              placeholder="First name"
              defaultValue={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
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
              id="lastName"
              placeholder="Last Name"
              defaultValue={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
              id="username"
              placeholder="User name"
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
              id="email"
              placeholder="Email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-6 w-full">
            <input
              type="password"
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
              id="password"
              placeholder="Password"
              defaultValue={null}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group form-check mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="status"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="status"
            >
              Set as admin
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
