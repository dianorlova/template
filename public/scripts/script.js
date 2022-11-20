// ключ для использования API
const key = 'fe88ea8fe7959c295cd58c1408d670b1'

// получает со страницы HTML обьект с классом flex__container__artists
const artists = document.getElementsByClassName('flex__container__artists')[0]; 
// получает со страницы HTML обьект с классом flex__container__popularTracks
const popularTracks = document.getElementsByClassName('flex__container__popularTracks')[0];

/**
 * Добавляет на стринцу  список популярных артистов (исполнителей)
 */
 fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${key}&format=json`)
 .then((response) => response.json())
 .then((json) => {
     json.artists.artist
         .slice(0, 12)
         .forEach((artist) => {
             const artist__card = createHTMLElement('div', 'artist__card');
             const artist__link = createHTMLElement('a', 'artist__link base_link');
             artist__link.href = artist.url;
             const avatar = createHTMLElement('img', 'avatar');
             const headline__h3 = createHTMLElement('h3', 'headline__h3');
             
             headline__h3.append(artist.name);
             artist__link.append(avatar);
             artist__link.append(headline__h3);

             artist__card.append(artist__link);

             artists.append(artist__card);
     })
 })
 .catch(() => {
     window.alert('Упс! При загрузке популярных исполнителей что-то пошло не так.\nПопробуйте проверить соединение с интернетом и обновить страницу.');
 })
 
/**
 * добавляет на страницу список популярных треков
 */
 fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`)
 .then((response) => response.json())
 .then((json) => {
     json.tracks.track
         .slice(0, 12)
         .forEach((track) => {
            const track_div = createHTMLElement('div', 'track');
            const track__img = createHTMLElement('img', 'track__img');
            const track__info = createHTMLElement('div', 'track__info');
            const track__name_h3 = createHTMLElement('h3', 'track__name');
            const track__name__link = createHTMLElement('a', 'track__name__link track__name base_link');
            track__name__link.href = track.url;
             
            const track__nameArtist = createHTMLElement('p', 'track__nameArtist');
            const track__nameArtist__link = createHTMLElement('a', 'track__nameArtist__link track__nameArtist  base_link');
            track__nameArtist__link.href = track.artist.url;

            track__name__link.append(track.name);
            track__name_h3.append(track__name__link);
            track__info.append(track__name_h3);
            track__nameArtist__link.append(track.artist.name);
            track__nameArtist.append(track__nameArtist__link);
            track__info.append(track__nameArtist);
             
            
             track_div.append(track__img);
             track_div.append(track__info);

            popularTracks.append(track_div);
     })
 })
 .catch(() => {
     window.alert('Упс! При загрузке популярных треков что-то пошло не так.\nПопробуйте проверить соединение с интернетом и обновить страницу.');
 })

/**
 * Создает HTML элемент
 * @param {string} tag - HTML тег
 * @param {string} className - имя класса, которое нужно присвоить элементу 
 * @returns {string} - HTML элемент
 */
 function createHTMLElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}