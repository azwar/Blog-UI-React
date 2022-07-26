import { userAgent } from "next/server";

export default function DetailPost({ post }) {
  const { title, body, createDate, user, category } = post;
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl mb-5">
        <div className="flex justify-between items-center m-4">
          <span className="text-gray-600">{createDate}</span>
          <a
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href="#"
          >
            {category.name}
          </a>
        </div>
        <div className="p-5 pt-0">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">{body}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="justify-end">By: {user.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
