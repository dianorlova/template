import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">

            <nav className="footer__top">

            <div>
                <h2 className="footer__heading">Company</h2>
                <ul className="footer_list">
                <li><a className="footer__list__link base_link" href="/">About Last.fm</a></li>
                <li><a className="footer__list__link base_link" href="/">Contact Us</a></li>
                <li><a className="footer__list__link base_link" href="/">Jobs</a></li>
                </ul>
            </div>
            <div>
                <h2 className="footer__heading">Help</h2>
                <ul className="footer_list">
                    <li><a className="footer__list__link base_link" href="/">Track My Music</a></li>
                    <li><a className="footer__list__link base_link" href="/">Community Support</a></li>
                    <li><a className="footer__list__link base_link" href="/">Community Guidelines</a></li>
                    <li><a className="footer__list__link base_link" href="/">Help</a></li>
                </ul>
            </div>
            <div>
                <h2 className="footer__heading">Goodies</h2>
                <ul className="footer_list">
                    <li><a className="footer__list__link base_link" href="/">Download Scrobbler</a></li>
                    <li><a className="footer__list__link base_link" href="/">Developer API</a></li>
                    <li><a className="footer__list__link base_link" href="/">Free Music Downloads</a></li>
                    <li><a className="footer__list__link base_link" href="/">Merchandise</a></li>
                </ul>
            </div>
            <div>
                <h2 className="footer__heading">Account</h2>
                <ul className="footer_list">
                    <li><a className="footer__list__link base_link" href="/">Sign Up</a></li>
                    <li><a className="footer__list__link base_link" href="/">Log In</a></li>
                    <li><a className="footer__list__link base_link" href="/">Subscribe</a></li>
                </ul>
            </div>
            <div>
                <h2 className="footer__heading">Follow us</h2>
                <ul className="footer_list">
                    <li><a className="footer__list__link base_link" href="/">Facebook</a></li>
                    <li><a className="footer__list__link base_link" href="/">Twitter</a></li>
                    <li><a className="footer__list__link base_link" href="/">Instagram</a></li>
                    <li><a className="footer__list__link base_link" href="/">YouTube</a></li>
                </ul>
            </div>

            </nav>

            <div className="footer__bottom">
            <div className="footer__bottom_flex_container">    
                <ul className="language__list">
                    <li className="current__language"><strong>English</strong></li>
                    <li className="additional__language">Deutsch</li>
                    <li className="additional__language">Español</li>
                    <li className="additional__language">Français</li>
                    <li className="additional__language">Italiano</li>
                    <li className="additional__language">日本語</li>
                    <li className="additional__language">Polski</li>
                    <li className="additional__language">Português</li>
                    <li className="additional__language">Русский</li>
                    <li className="additional__language">Svenska</li>
                    <li className="additional__language">Türkçe</li>
                    <li className="additional__language">简体中文</li>
                </ul>
                <div className="div__footer__logo">
                    <p className="footer__audioscrobbler">Audioscrobbler</p>
                    <img className="footer__logo" src="https://www.last.fm/static/images/footer_logo@2x.49ca51948b0a.png" alt=""></img>
                </div>

                

            </div>
            <p className="timeZone">Time zone: <strong className="current__language">Europe/Moscow</strong></p>
            <div className="footer__legal">
                <ul className="footer__legal__list">
                    <li className="footer__legal__list__item">
                        <a className="base_link" href="https://www.paramount.com/">CBS Interactive</a>
                        <span>© 2022</span>
                        <span>Last.fm</span>
                        <span>Ltd. All rights reserved</span>
                    </li>
                    <li className="footer__legal__list__item"><a className="base_link" href="https://www.last.fm/legal/terms">Terms of Use</a></li>
                    <li className="footer__legal__list__item"><a className="base_link" href="https://www.viacomcbsprivacy.com/ru/policy">Privacy Policy</a></li>
                    <li className="footer__legal__list__item"><a className="base_link" href="https://www.last.fm/legal">Legal Policies</a></li>
                    <li className="footer__legal__list__item"><a className="base_link" href="https://www.viacomcbsprivacy.com/ru/cookies">Cookies Policy</a></li>
                    <li className="footer__legal__list__item"><a className="base_link" href="/">Cookie Information</a></li>
                    <li className="footer__legal__list__item"><a className="base_link" href="https://careers.paramount.com/">Jobs at ViacomCBS</a></li>
                    <li className="footer__legal__list__item"><a className="base_link" href="https://www.last.fm/">Last.fm Music</a></li>
                </ul>
            </div>
            </div>
        </footer>
    )
}