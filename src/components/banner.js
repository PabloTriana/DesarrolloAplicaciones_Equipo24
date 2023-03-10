import React,{ Component } from "react";
class  Banner extends Component{
    
    render(){
        const {titulo,subtitulo} = this.props
        return(
            <div className="componenteB">
                <h1 className="titulo">{titulo}</h1>
                <h2 className="subtitulo">{subtitulo}</h2>
            </div>
            
        );
    }
} 
export default Banner;
