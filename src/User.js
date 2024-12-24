function User(props){
    return(
        <div style={{margin:10}}>  
            <h1>Hello {props.name}</h1>
            <h2>email: {props.email}</h2>
        </div>
    )
}
export default User