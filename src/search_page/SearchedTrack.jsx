import './searched_track.css';


/**
 * 
 * @param {object} track - объект, хранящий информацию об искомом треке
 * @returns карточку искомого трека
 */
export default function SearchedTrack({ track }) {
    return (
        <div className='track__search__item'>
            <div className='play__track__search__item'></div>
            <div className='img__track__search__item'></div>
            <a className='track__name__link track__name base_link' href={track.url}>{track.name}</a>
            <a className='track__nameArtist__link track__nameArtist base_link' href='/'>{track.artist}</a>
        </div>
    )
}
