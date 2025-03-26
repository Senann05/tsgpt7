import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Profile =()=>{
    const[ name, setName] = useLocalStorage<string>("username", "");
    const [savedName, setSavedName] = useState<string>("");

   const handleClick = ()=>{
    setSavedName(name);

   }
    return(
        <div>
            <h1>Profil</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="adinizi yazin"></input>
            <button onClick={handleClick}>KLIKLE</button>

        {savedName && <p>Kaydedilmiş isim: {savedName}</p>}
            
        </div>
    )   
};export default Profile;