function App(){
    let cnt=1;
    const imgurl='https://assets.onecompiler.app/42sryw8q2/42sryuhsc/purp.jpg';
    const handle=(e)=>e.target.style.display="none";
    /*const handleClick=(name)=>{
        if(cnt<=2){
            console.log(`${name}, you clicked me ${cnt} times`);
            cnt++;
        }
        else{
            console.log(`${name}... stop clicking me`);
        }
    }*/




    return (
        
            <img onClick={(e)=>handle(e)} src={imgurl}></img>
            //<button className="bc" onClick={()=>handleClick("jess")} >SUBMIT</button>
        
    );

}
export default App