import { Routes, Route } from 'react-router-dom'
import { Pdf } from '../pages/pagePDF'
import { Link } from '../pages/pageLink'
import { Historic } from '../pages/pageHistoric'
import { DefaultPages } from './Layout/DefaultLayout'

export function RoutesPages () {
    return (
        <Routes>
            <Route path='/' element={<DefaultPages />}>
                <Route path='/' element={<Pdf />}/>
                <Route path='/link' element={<Link />}/>
                <Route path='/historic' element={<Historic />}/>
            </Route>
        </Routes>
    )
} 
import { createBrowserRouter } from 'react-router-dom' 