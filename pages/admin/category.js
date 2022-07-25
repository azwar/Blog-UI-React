import LayoutAdmin from '../../layout/layout_admin'
import ManageCategory from '../../components/manage_category'

export default function Admin({ Component, pageProps }) {
    return (
      <LayoutAdmin>
        <ManageCategory />
      </LayoutAdmin>
    )
  }