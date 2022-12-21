import ArtistsList from '../popular_artists/ArtistsList';
import PopularTracksList from '../popular_tracks/PopularTracksList';
import './main_content.css';

/**
 * главная страница приложения, содержащая список популярных артистов и треков
 * @returns главную страницу приложения
 */
export default function MainContent() {
    return (
        <main className="content">
            <h1 className="headline__h1">Music</h1>
            <h2 className="headline__h2">Hot right now</h2>
            <div className="hr__line"></div>

            <ArtistsList/>

            <h2 className="headline__h2">Popular tracks</h2>
            <div className="hr__line"></div>
            
            <PopularTracksList/>
        </main>
    )
}