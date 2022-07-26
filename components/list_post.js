import { GlobeAltIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { deletePost, listAllPost, listAllPostPublic } from "../services/post";
import ItemPost from "./item_post";

export default function ListPost() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listAllPostPublic(page).then((res) => {
      if (res.data) 
      {
        setPosts(res.data);
      }
    });
  }, []);
  return (
    <div className="overflow-x-auto">
      {posts.map((item) => {
        return (
          // <div key={item.id}>
          //   <div>{item.title}</div>
          //   <div>{item.category.name}</div>
          //   <div>{item.user.username}</div>
          //   <div>{item.createDate}</div>
          // </div>
          <ItemPost post={item} key={item.id} />
        );
      })}
    </div>
  );
}
