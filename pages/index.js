import ListPost from "../components/list_post";
import LayoutPublic from "../layout/layout_public";

export default function Admin({ Component, pageProps }) {
  return (
    <LayoutPublic>
      <ListPost />
    </LayoutPublic>
  );
}
