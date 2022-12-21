import './popular_artists.css';
/**
 * 
 * @param {object} artist - объект, хранящий информацию об артисте 
 * @returns карточку популярного артиста
 */
export default function Artist({ artist }) {
    return (
        <div className="artist__card">
            <a className="artist__link base_link" href={artist.url}>
                <img className="avatar" alt=''></img>
                <h3 className="headline__h3">
                    {artist.name}
                </h3>
            </a>
            
        </div>
    )
}
