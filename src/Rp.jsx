import React, {useState} from 'react';

function Rp(){
   
    let [count,setcount]=useState(0);
    let [car,setcar]=useState({name:"Ferrari", year:2005, model:"2AS" });
    

    
    const incre=()=>{
        setcount(c=>c+1);
        setcount(c=>c+1);
        setcount(c=>c+1);
    }
    const decre=()=>{
        setcount(count-1);
    }
    const reset=()=>{
        setcount(0);
    }
    function handlename(){
        setcar({...car,name:"BMW"});
    }
    function handlyear(event){
        setcar({...car, year:event.target.value});
    }
    function handlmode(event){
        setcar({...car,model:event.target.value});
    }
    
    
    return(
        <div>
            <p class="hello">COUNTER: {count}</p>
            <div class="move">
            <button className="toogl" onClick={incre}>INC</button>
            <button className="toggl" onClick={decre}>DEC</button>
            <button className="toggl" onClick={reset}>RESET</button>
            <input type="text" value={car.name} onChange={handlename}></input>
            <input type="number" value={car.year} onChange={handlyear}></input>
            <input type="text" value={car.model} onChange={handlmode}></input>
            </div>

        </div>

    );


}
export default Rp

