import React from "react";
import "./about.css"
function About (){
    return <div>
        <p>
Context (Context.js):It defines a React context named music using React.createContext().
The context provider (Context component) has a state that includes a music array, addmusic method (currently empty), and a getstoredmusic method.
The getstoredmusic method retrieves music data from the local storage and updates the context state.
<br/><br/>
Navbar (Navbar.js):It contains a navigation bar with links using the Link component from react-router-dom.
The links include "HOME," "About," and "List," which are presumably part of the navigation for your application.
<br/><br/>
Body (Body.js):It includes an input form for adding new songs to the playlist.
User input for song name and artist name is managed using React useState hooks.
The save function is called when the "SAVE" button is clicked. It adds a new song to the local storage and updates the context state.
<br/><br/>
List (List.js):It displays the total number of songs in the playlist.
<br/><br/>
The map function is used to iterate through the list of songs in the context and display them in a table.
<br/><br/>
Project Workflow:
Users can navigate through the application using the links in the navbar.
The body component allows users to input song names and artist names to add to the playlist.
The playlist data is stored in local storage and retrieved using the context provider.
The list component dynamically displays the songs from the playlist.
        </p>
    </div>
}
export default About