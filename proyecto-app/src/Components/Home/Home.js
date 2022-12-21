import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome"
import {useState} from "react";
export default function Home (){
   
    let [unValor,setValor]=useState(true)
    const cambiarValor=()=>{
        console.log("se cambio el valor de la variable unValor")
        setValor(false)
    }
   
    return(
        <header className= "bg-primary principal-search container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="container-header d-flex flex-column justify-content-center">
            <h1 clasName="row justify-content-center"> Proyect - Rick & Morty</h1>
            <nav className="row navbar align-items-center">
                <ul className="nav nav-pills justify-content-center">
                    <ListItemHome dato="Characters"/>
                    <ListItemHome dato= "Contact"/>
                </ul>
            </nav>
            </div>    
        </header>
    )
}
