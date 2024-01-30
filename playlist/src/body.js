import React,{useContext, useState} from "react";
import './body.css'
import image from './image0.png'
import {music} from './context.js'
function Body(){
    const[songname,setsongname]=useState('')
    const[artistname,setartistname]=useState('')
    const obj=useContext(music)
    function save(){ 
        const songlibrary=JSON.parse(localStorage.getItem('songlibrary')||"[]")
        const library={
            songname:songname,
            artistname:artistname
        }
        obj.addmusic(obj)
        songlibrary.push(library)
        localStorage.setItem('songlibrary',JSON.stringify(songlibrary))
        obj.getstoredmusic()
    }
    return<div className="body">
        <div className="body_left">
        <div id="song_name">
        <h1>SONG NAME</h1>
        <input type="text" placeholder="Enter Song Name" value={songname} onChange={(e)=>{setsongname(e.target.value)}}/>
        </div>
        <br/>
        <div id="artist_name">
        <h1>ARTIST</h1>
        <input type="text" placeholder="Enter Name of Artist" value={artistname} onChange={(e)=>{setartistname(e.target.value)}} id="artist"/>
        </div>
        <br/>
        <br/>
        <button className="btn" onClick={save}>SAVE</button>
        </div>
        <img src={image} alt="" className="img"/>
    </div>
}
export default Body;