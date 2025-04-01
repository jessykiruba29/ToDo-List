function Fruits(){
    const fruits=[{id:1, name:"apple"},
        {id:3, name:"mango"},
        {id:2, name:"banana"}];
    
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));
    //fruits.sort((a,b)=>b.id-a.id);
    const low=fruits.filter(fruit=>fruit.id<2);
    
    const list=low.map(l=><li key={l.id}>{l.name}</li>);
    return(
        <>
            <ul>{list}</ul>
        </>
    );

}
export default Fruits