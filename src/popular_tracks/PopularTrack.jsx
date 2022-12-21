import './popular_tracks.css';

/**
 * 
 * @param {object} track - объект, хранящий информацию об артисте
 * @returns карточку популярного трека
 */
export default function PopularTrack({ track }) {
    return (
        <div className='track'>
            <img className='track__img'></img>
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

/*
            const track_div = createHTMLElement('div', 'track');+
            const track__img = createHTMLElement('img', 'track__img');+
            const track__info = createHTMLElement('div', 'track__info');+
            const track__name_h3 = createHTMLElement('h3', 'track__name');+
            const track__name__link = createHTMLElement('a', 'track__name__link track__name base_link');+
            track__name__link.href = track.url;+
             
            const track__nameArtist = createHTMLElement('p', 'track__nameArtist');+
            const track__nameArtist__link = createHTMLElement('a', 'track__nameArtist__link track__nameArtist  base_link');+
            track__nameArtist__link.href = track.artist.url;+

            track__name__link.append(track.name);+
            track__name_h3.append(track__name__link);+
            track__info.append(track__name_h3);+
            track__nameArtist__link.append(track.artist.name);+
            track__nameArtist.append(track__nameArtist__link);+
            track__info.append(track__nameArtist);+
             
            
             track_div.append(track__img);+
             track_div.append(track__info);+

            popularTracks.append(track_div);
*/