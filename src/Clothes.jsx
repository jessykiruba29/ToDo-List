import React, {useState} from 'react';

function Clothes(){
    const[cloth,addcloth]=useState(["skirts","top","jeans"]);

    function add(){
        const newcloth=document.getElementById("inputval").value;
        document.getElementById("inputval").value="";
        addcloth(c=>[...c,newcloth]);

    }
    function remove(index){
        
        addcloth(cloth.filter((element,i)=>i!==index));

    }

    return(
        <div>
            <h2>YOUR CLOTHES CART</h2>
            <ul>
                {cloth.map((clo,index)=><li key={index} onClick={()=>remove(index)}>{clo}</li>)}
                
            </ul>
            <input type="text" id="inputval" placeholder="enter desired product"></input>
            <button id="drr" value="ADD" onClick={add}>ADD</button>
        </div>

{task.map((tas,index)=>(<li key={index} className="taskitem" >
    <span className="text">{tas.name}</span>
    <div className="buttongrp">
        <button id="rem1" onClick={()=>remove(index)}>✘</button>
        <button id="rem2" onClick={()=>up(index)}>⬆</button>
        <button id="rem3" onClick={()=>down(index)}>⬇</button>
    </div>
        </li>
))}
    );
}
export default Clothes
{task.map((tas,index)=><li key={index} className="taskitem" >{tas.name}<button id="rem" onClick={()=>remove(index)}>✘</button><button id="rem" onClick={()=>up(index)}>⬆</button><button id="rem" onClick={()=>down(index)}>⬇</button></li>)}