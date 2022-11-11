import StyledHeader from './header.style';
import Link from 'next/link';

type HeaderProps = {};

const Header = ({ }: HeaderProps) => {
    return (
        <StyledHeader>
            <Link href="/">
                <a className="header__logo" >
                    Cazzola Andrea
                </a>
            </Link>
            <nav className="header__nav">
                <Link href="/projects">
                    Projects
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/contacts">
                    Contacts
                </Link>
            </nav>
        </StyledHeader>
    )
}

export default Header