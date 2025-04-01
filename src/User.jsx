function User(props){
    const yes=<h2>welcome {props.username}</h2>
    const no=<h2>LOGIN TO CONTINUE</h2>
    


        
            if(props.islogged){
                return yes 
            }
            else{
                return no
            }
        
    
}
export default User