import { useEffect, useState } from "react";
import { getPostDetailsPublic } from "../../services/post";
import { useRouter } from "next/router";
import DetailPost from "../../components/detail_post";
import LayoutPublic from "../../layout/layout_public";

export default function Admin({ Component, pageProps }) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();

  useEffect(() => {
    if (id) {
      getPostDetailsPublic(id).then((res) => {
        // console.log(res)
        setPost(res.data);
      });
    }
  }, [id]);

  return (
    <LayoutPublic>
      {post ? (<DetailPost post={post} />) : (<>Please wait</>)}
    </LayoutPublic>
  );
}
