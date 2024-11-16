import { Outlet } from 'react-router-dom'
import NavAndSide from '../components/NavAndSide'

const MainLayout = () => {
    return (
        <>
            <NavAndSide />
            <Outlet />
        </>
    )
}

export default MainLayout