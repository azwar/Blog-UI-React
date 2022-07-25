import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from "react";
import swal from "sweetalert";
import { registerUser } from "../services/auth";

export default function Example() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser({
      firstName: firstname,
      lastName: lastname,
      username: username,
      email: email,
      password: password
    })
    console.log('response', response);
    if(response.status !== 200) {
      swal("Failed", response.messages, "error");
    }
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto h-20"
              src="/images/register.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="firstname" className="sr-only">
                  First name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="firstname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First name"
                  onChange={e => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  Full name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                  onChange={e => setLastname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="btn gap-2 btn-block btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Credits to <a href="https://www.flaticon.com/free-icons/blog" title="blog icons">Blog icons created by Freepik - Flaticon</a> */}
      </div>
    </>
  );
}
