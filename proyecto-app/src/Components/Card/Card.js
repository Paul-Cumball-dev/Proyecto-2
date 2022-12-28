export default function Card(info){
    return(
        <div>
            <img alt=""/>
            <h2 key={info}>{info}</h2>
            <button>Now More...</button>
        
        </div>
    )
}