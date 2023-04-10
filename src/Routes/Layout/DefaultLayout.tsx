import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Sidebar'

export function DefaultPages () {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
        </>
    )
}