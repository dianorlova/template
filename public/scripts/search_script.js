// ключ для использования API
const key = 'fe88ea8fe7959c295cd58c1408d670b1'

// получает со страницы HTML обьект с классом input__search
const input = document.getElementsByClassName('input__search')[0];
// получает со страницы HTML обьект с классом search__button
const button = document.getElementsByClassName('search__button')[0];
// получает со страницы HTML обьект с классом tracks__search__flex__container
const tracks = document.getElementsByClassName('tracks__search__flex__container')[0];
// получает со страницы HTML обьект с классом h1__search
const h1__search = document.getElementsByClassName('h1__search')[0];


/**
 * выполняет функцию поиска и добавляет на страницу результаты поиска
 */
button.addEventListener('click', (_) => {
    if (input.value === '') {
        window.alert('Упс! Запрос для поиска пуст.\nПожалуйста, введите запрос.');
    }
    else {
        h1__search.innerHTML = `Search results for "${input.value}"`
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${input.value}&api_key=${key}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                
                const searched = json.results.trackmatches.track;
                if (searched.length === 0){
                    window.alert(`Упс! По запросу ${input.value} ничего не найдено. Попробуйте поменять запрос.`);
                    tracks.innerHTML = 'По вашему запросу ничего не нашлось :(';
                }
                else{
                    tracks.innerHTML = '';
                    searched
                    .slice(0, 12)
                        .forEach((track) => {
                            const track__search__item = createHTMLElement('div', 'track__search__item');

                            const play__track__search__item = createHTMLElement('div', 'play__track__search__item');

                            const track__image = createHTMLElement('div', 'img__track__search__item');

                            const track__name__link = createHTMLElement('a', 'track__name__link track__name base_link');
                            track__name__link.href = track.url; 
                            track__name__link.append(track.name);

                            const artist__name = createHTMLElement('a', 'track__nameArtist__link track__nameArtist base_link');

                            artist__name.append(track.artist);
                            
                            track__search__item.append(play__track__search__item);
                            track__search__item.append(track__image);
                            track__search__item.append(track__name__link);
                            track__search__item.append(artist__name);

                            tracks.append(track__search__item);

                        })
                }
            })
            .catch((e) => {
                window.alert(e); //
            })

    }
})


/**
 * Создает HTML элемент
 * @param {string} tag - HTML тег
 * @param {string} className - имя класса, которое нужно присвоить элементу 
 * @returns {string} HTML элемент
 */
function createHTMLElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}