import s from './header.module.css';
import logoImg from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={s.container}>
            <div className={s.image}>
                <Link to="/">
                    <img src={logoImg} alt="crypt logo" />
                </Link>
            </div>
        </header>
    )
}