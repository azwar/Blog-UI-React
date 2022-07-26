import { userAgent } from "next/server";

export default function ItemPost({ post }) {
  const { title, body, createDate, user, category } = post;
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl mb-5">
        <div class="flex justify-between items-center m-4">
          <span class="text-gray-600">{createDate}</span>
          <a
            class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
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
          <p className="font-normal text-gray-700 mb-3">{body?.substring(0, 150)}</p>
          <div className="flex justify-between items-center mt-4">
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href={`/post/${post.id}`}
            >
              Read more
            </a>
            <div className="justify-end">{user.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
