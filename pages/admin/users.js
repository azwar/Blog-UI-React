import LayoutAdmin from '../../layout/layout_admin'
import ManageUser from '../../components/manage_user'

export default function Admin({ Component, pageProps }) {
    return (
      <LayoutAdmin>
        <ManageUser/>
      </LayoutAdmin>
    )
  }