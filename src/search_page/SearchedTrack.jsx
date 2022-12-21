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
            <a className='track__nameArtist__link track__nameArtist base_link'>{track.artist}</a>
        </div>
    )
}
/*
                           const track__search__item = createHTMLElement('div', 'track__search__item');+
                            const play__track__search__item = createHTMLElement('div', 'play__track__search__item');+

                            const track__image = createHTMLElement('div', 'img__track__search__item');+

                            const track__name__link = createHTMLElement('a', 'track__name__link track__name base_link');+
                            track__name__link.href = track.url; +
                            track__name__link.append(track.name);+

                            const artist__name = createHTMLElement('a', 'track__nameArtist__link track__nameArtist base_link');+

                            artist__name.append(track.artist);+
                            
                            track__search__item.append(play__track__search__item);+
                            track__search__item.append(track__image);+
                            track__search__item.append(track__name__link);+
                            track__search__item.append(artist__name);

                            tracks.append(track__search__item);+
*/