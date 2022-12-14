import { dblClick } from "@testing-library/user-event/dist/click";
import { useState,useEffect } from "react";

const Favourites = (props) => {
    let title= props.data
    let [favs,setfav]=useState([])     
    let handleDelete = (id)=>{
        setfav(favs.filter( x => x.id !== id ))

    }
    useEffect(()=>{
        fetch('http://localhost:4000/favourites')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setfav(data)
        })
    },[])
    return ( 
        <div className="favs">
            <h1>{title}</h1>
            {favs.map((data)=>{
                return(
                    <div className="list">
                        <h1>{data.title}</h1>
                        <p>{data.genre}  {data.lag}</p>
                        <p>{data.rating}</p>
                        <button onClick={()=>handleDelete(data.id)}>Delete</button>
                    </div>
                )

            })}

        </div>
     );
}
           
    
 
export default Favourites;