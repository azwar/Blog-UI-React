import LayoutAdmin from "../../layout/layout_admin";
import ManagePost from "../../components/manage_post";

export default function Admin({ Component, pageProps }) {
  return (
    <LayoutAdmin>
      <ManagePost />
    </LayoutAdmin>
  );
}
