import './popular_tracks.css';

/**
 * 
 * @param {object} track - объект, хранящий информацию об артисте
 * @returns карточку популярного трека
 */
export default function PopularTrack({ track }) {
    return (
        <div className='track'>
            <img className='track__img' alt=''></img>
            <div className='track__info'>
                <h3 className='track__name'>
                    <a className='track__name__link track__name base_link' href={track.url}>{track.name}</a>
                </h3>
                <p className='track__nameArtist'>
                    <a className='track__nameArtist__link track__nameArtist  base_link' href={track.artist.url}>{track.artist.name }</a>
                </p>
            </div>
        </div>
    ) 
}
