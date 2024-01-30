import React, { useContext } from "react";
import {music} from "./context.js"
import './list.css'
function List(){
    const obj1=useContext(music)
    return<div className="listbody">
        <h1 className="header">The total number of music in your play list is {obj1.music.length}</h1>
        <table id="table">
            <thead>
                <th>SONG NAME</th>
                <th>ARTIST NAME</th>
            </thead>
            <tbody>
            {obj1.music.map((song, index) => (
            <tr key={index}>
              <td>{song.songname}</td>
              <td>{song.artistname}</td>
            </tr>
          ))}             
            </tbody>
        </table>
    </div>
}
export default List
