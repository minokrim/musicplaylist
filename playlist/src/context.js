import React,{Component} from "react";
export const music=React.createContext()
class Context extends React.Component{
    constructor(){
        super()
        this.state={
            music:[],
            addmusic:this.addmusic,
            getstoredmusic:this.getstoredmusic
        }
    }
    addmusic=()=>{
        
    }
    getstoredmusic=()=>{
        const songlibrary=JSON.parse(localStorage.getItem('songlibrary')||'[]')
        this.setState({music:songlibrary})
    }
    render(){
        return<music.Provider value={{...this.state}}>
            {this.props.children}
        </music.Provider>
    }
}
export default Context