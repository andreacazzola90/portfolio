import Link from 'next/link';
import StyledStartScreen from './startScreen.style';

type HeaderProps = {};

const Header = ({ }: HeaderProps) => {
    return (
        <StyledStartScreen>
            <div className="header__left">
                <div>
                    <h1>Hello, I'm Andrea</h1>
                    <p>🐲 A Front-End Developer from Italy</p>
                </div>

                <div className="header__left__link">
                    <div className="header__left__link-rotate">
                        <Link href="/projects">Projects -ARROW</Link>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right__link">
                    Blog -ARROW
                </div>
            </div>
        </StyledStartScreen>
    )
}

export default Header