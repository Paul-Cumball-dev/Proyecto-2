import Card from "../Card/Card";

export default function SectionCards(){
    let datos=["Rick","Morty","Infor"];
    return(
        <section>
            {datos.map((dato)=>{
            return <Card key={dato}info={dato}/>})
        }
              
        </section>
    )
}