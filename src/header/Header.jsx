import './header.css';
    
export default function Header() {
    return (
        <header className="header">
            <img className="header__player" src="https://www.last.fm/static/images/defaults/player_default_album.430223706b14.png" alt=""></img>

            <a className="header__link" href="https://www.last.fm/music">
            <img className="header__logo" src="https://www.last.fm/static/images/logo_static.adb61955725c.png" height="28" width="104" alt=""></img>
            </a>
            <div className="header__nav">
                <a href="/search">
                    <img className="header__searchIcon" src="search.png" alt=""></img>
                </a>
                <a href="/" className="header__navLink">Home</a>
                <a href="/" className="header__navLink">Live</a>
                <a href="/" className="header__navLink">Music</a>
                <a href="/" className="header__navLink">Charts</a>
                <a href="/" className="header__navLink">Events</a>
                <a href="/" className="header__navLink">Features</a>
                <img className="header__userIcon" src="user.png" alt=""></img>
            </div>
        </header>
    )
}