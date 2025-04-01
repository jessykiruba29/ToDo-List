import React, {useState} from 'react';

function Todo(){
    const[task,addtask]=useState([]);
    const[newtask,setnew]=useState("");
    function namechange(event){
        setnew(event.target.value);

    }
    function add(){
        if(newtask.trim()==="") return ;
        const list={name:newtask};
        addtask(t=>[...t,list]);
        setnew("");
    }
    function remove(index){
        addtask(task.filter((element,i)=>i!==index));

    }
    function up(index){
        if(index>0){
            const updated=[...task];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]];
            addtask(updated);
        }

    }
    function down(index){
        if(index<task.length-1){
            const updated=[...task];
            [updated[index],updated[index+1]]=[updated[index+1],updated[index]];
            addtask(updated);

        }
        

    }
    return(
        <div>
            
            <p id="para">To Do List</p>
            <div class="cent">
            <input type="text" value={newtask} id="field" placeholder="Enter your tasks here.." onChange={namechange}></input>
            <button value="ADD" onClick={add} id="put">+</button>
            </div>

            <ul>
            {task.map((tas,index)=><li key={index} className="task-item">{tas.name}
                <div id="push">
                <button id="rem" onClick={()=>remove(index)}>✘</button>
                <button id="rem" onClick={()=>up(index)}>⬆</button>
                <button id="rem" onClick={()=>down(index)}>⬇</button>
                </div>
                </li>)}
            
            </ul>
        </div>    
        
    );
}
export default Todo
