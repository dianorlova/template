import { useState, useEffect } from "react";
import SearchedTrack from './SearchedTrack';
import { key } from '../api_key'; 
import './search_page.css';

/**
 * Страница приложения с поиском
 * @returns страницу с поиском
 */
export default function SearchPage() {
    const [searchedTracks, setSearchedTracks] = useState([]);
    const [searchResult, setSearchResult] = useState("");
    const [inputValue, setInputValue] = useState("");

    // обработка пустой поисковой строки и задание значения для поиска "по умолчанию"
    if (searchResult === "") {
        setSearchResult("Selena Gomez");
    }

    // поиск трека с помощью API
    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchResult}&api_key=${key}&format=json&limit=12`)
            .then((response) => response.json())
            .then((json) => {
                const searched = json.results.trackmatches.track;
                setSearchedTracks(
                    searched
                )})
                .catch(() => {
                    window.alert("Упс! Ошибка поиска. Измените данные для поиска.");
                })
            }, [searchResult]
    );

    return (
        <main class="content">
            <h1 class="h1__search">Search results for "{searchResult}"</h1>
            <div class="search__bar__container">
                <input class="input__search" type="search" placeholder="Search for music…"
                        onChange={ (event) => setInputValue(event.target.value) } onKeyDown={(ev) => {
                            if (ev.key === "Enter") {
                                setSearchResult(inputValue);
                            }
                            }
                          }/>
                <button class="search__button" type="button" onClick={() => setSearchResult(inputValue)}>
                    Найти
                </button>
            </div>

            <div class="tracks__search">
                <h2 class="h2__search">Tracks</h2>

                <div class="tracks__search__flex__container">
                    { 
                        searchedTracks.map((track) => {
                            return <SearchedTrack key={ track.url} track={track}/>
                        })
                    }
                </div>
            
            </div>
        </main>
    )
}