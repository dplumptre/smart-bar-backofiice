import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav'

const MainLayout = () => {
  return (
    <div>
        <Nav/>
      <div className="md:container md:mx-auto">
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
