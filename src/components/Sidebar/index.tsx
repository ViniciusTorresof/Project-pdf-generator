import { FilePdf, LinkSimple, ListBullets } from 'phosphor-react';
import { NavLink } from 'react-router-dom'
import { Aside, ListAside } from './style';

export function Menu () {
    return (
        <Aside>
            <h4 className='title-aside'>Work</h4>
            <ListAside>
                <NavLink to="/"><FilePdf /></NavLink>
                <NavLink to="/link"><LinkSimple /></NavLink>
                <NavLink to="/historic"><ListBullets /></NavLink>
            </ListAside>
        </Aside>
    )
}