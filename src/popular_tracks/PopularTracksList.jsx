import { useState, useEffect } from "react";
import PopularTrack from './PopularTrack';
import { key } from '../api_key'; 
import './popular_tracks.css';

/**
 * добавляет на страницу список популярных треков
 * @returns список популярных треков
 */
export default function PopularTracksList() {
    const [poularTracks, setPopularTracks] = useState([]);
 
    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json&limit=12`)
        .then((response) => response.json())
        .then((json) => {
            setPopularTracks(
                json.tracks.track
            );
        })
        .catch(() => {
            window.alert('Упс! При загрузке популярных треков что-то пошло не так.\nПопробуйте проверить соединение с интернетом и обновить страницу.');
        })
    }, []);
    return (
        <div className='flex__container__popularTracks'>
            { 
                poularTracks.map((track) => {
                return <PopularTrack key={ track.url } track={ track }/>
            })}
        </div>
    );
}
