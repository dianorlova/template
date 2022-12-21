import { useState, useEffect } from "react"
import Artist from "./Artist";
import { key } from '../api_key'; 
import './popular_artists.css';

/**
 * добавляет на страницу список популярных исполнителей
 * @returns список популярных исполнителей
 */
export default function ArtistsList() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${key}&format=json&limit=12`)
            .then((response) => response.json())
                .then((json) => {
                    setArtists(
                        json.artists.artist
                    ); 
            })
            .catch(() => {
                window.alert('Упс! При загрузке популярных исполнителей что-то пошло не так.\nПопробуйте проверить соединение с интернетом и обновить страницу.');
            })
    }, []);
    return (
        <div className="flex__container__artists">
            {artists.map((artist) => { 
                return <Artist key={artist.name} artist={artist} />
            }) }
        </div>
    ) 
}