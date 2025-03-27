import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserList=()=>{
    const userContext= useContext(UserContext);
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[edit, setEdit]=useState<number|null>(null)

    if(!userContext){
        return <p>Context is loading...</p>
    }

    const {users, addUser, deleteUser, updateUser} = userContext;

    const handleAddUser=()=>{
        if(name.trim()=== ""||email.trim()==="")return;

        if(edit !==null){
            updateUser({id: edit,name,email})
            setEdit(null);
        }else{
            addUser({id:0, name,email})
        }
        setName("")
        setEmail("")
    }

    const handleEdit = (userId: number, userName: string, userEmail: string)=>{
        setName(userName)
        setEdit(userId)
        setEmail(userEmail)
    }
    return(
        <div>
            <h2>{users.length === 0 ? "User List is Empty" : "User List" }</h2>
            <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={()=> handleEdit(user.id,user.name,user.email)}>Edit</button>
          </li>
        ))}
      </ul>

      <h2>{edit !==null? "Update User": "Add new User"}</h2>
      <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
      <input type="email" value={email} placeholder="E-Mail" onChange={(e)=>setEmail(e.target.value)}></input>
      <button onClick={handleAddUser}>{edit !==null? "Edit": "Add"}</button>
        </div>
    );
};
export default UserList;