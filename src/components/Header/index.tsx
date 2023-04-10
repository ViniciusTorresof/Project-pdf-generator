import LogoHeader from '../../assets/logo.png';
import { Alarm } from 'phosphor-react'
import { ButtonDarkLight, HeaderContainer } from './style';

export function Header () {
    return (
        <HeaderContainer>
            <img src={LogoHeader}/>
            <ButtonDarkLight>
                <Alarm />
            </ButtonDarkLight>
        </HeaderContainer>
    )
}