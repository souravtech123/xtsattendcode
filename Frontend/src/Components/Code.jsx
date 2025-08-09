import React, { useEffect , useState} from 'react'

const Code = () => {

  const [img , setimg] = useState("")

  useEffect(  () => {
   
     fetch('https://attend-backend-hrqv.onrender.com')
     .then(res => res.json())
     .then(data => {
      setimg(data.Qrcode)
     }) ;
    
  } , [])

    
  return (
    <>
   <img src={img} alt="" />
    </>
  )
}

export default Code
