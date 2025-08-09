import React, { useState } from 'react'



const Admin = () => {

    const [link , setlink] = useState("");
    
    const handleChange = async () => {

        const res = await fetch('https://attend-backend-hrqv.onrender.com' , {
            method : 'POST' ,
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ link })

        })
        const data = await res.json();
        console.log(data)

    }


  return (
    <div>
      <input type="text" 
      placeholder='Enter the form link'
      value={link}
      onChange={(e) => {setlink(e.target.value)}}
      />
      <button onClick={handleChange}>Upload</button>
    </div>
  )
}

export default Admin
