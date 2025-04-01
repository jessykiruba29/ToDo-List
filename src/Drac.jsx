import React, {useState} from 'react';
function Drac(){
    const[name,setname]=useState("");
    const[comment,setcomm]=useState("");
    const[pay,paymeth]=useState("");
    const[color,setcolor]=useState("#ffffff");
    function handl(event){
        setname(event.target.value);
    }
    function commen(event){
        setcomm(event.target.value);
    }
    function payment(event){
        paymeth(event.target.value);
    }
    function col(event){
        setcolor(event.target.value);
    }



    return(
        <div>
            <input value={name} onChange={handl} placeholder='ENTER YOUR NAME'></input>
            <p>Name: {name}</p>

            <h1>Complaint: {comment}</h1>
            <textarea row="5" cols="10" onChange={commen}placeholder='ENTER COMPLAINT'></textarea>

            <select value={pay} placeholder='payment method' onChange={payment}>
                <option>select an option</option>
                <option>card</option>
                <option>cash</option>
            </select>
            <h1>PAYMENT: {pay}</h1>

            <input type="color" value={color} onChange={col}>
            
            </input>
        </div>


    );


}
export default Drac;