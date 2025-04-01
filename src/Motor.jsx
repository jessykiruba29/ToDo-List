import React,{useState} from "react";

function Motor(){

    const [car,setcar]= useState([]);

    const [year,setyear]=useState(new Date().getFullYear());
    const [model,setmodel]=useState("");
    const [name,setname]=useState("");
    
    
    function add(){
        const list={name:name,year:year,model:model};
        setcar(c=>[...c,list]);

        setyear(new Date().getFullYear());
        setname("");
        setmodel("");
        
    }

    function remove(index){
        setcar(car.filter((element,i)=>i!==index))
    }


    function yearchange(event){
        setyear(event.target.value);
    }
    function modelchange(event){
        setmodel(event.target.value);
    }
    function namechange(event){
        setname(event.target.value);
    }
    

    return (
        <div>
            <ul>
                {car.map((c,index)=><li key={index} onClick={()=>remove(index)}>{c.name} {c.year} {c.model}</li>)}    

            </ul>
            <h1>ENTER DETAILS</h1>
            
            <input type="text" id="inpt" value={name} onChange={namechange}></input><br></br>
            <input type="text" id="inpt" value={year} onChange={yearchange}></input><br></br>
            <input type="text" id="inpt" value={model} onChange={modelchange}></input><br></br>
            <button onClick={add}>ADD</button>

        </div>
        



    );
}
export default Motor