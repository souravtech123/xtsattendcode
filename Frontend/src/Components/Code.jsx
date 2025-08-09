import React, { useEffect , useState} from 'react'

const Code = () => {

  const [img , setimg] = useState("")

  useEffect(  () => {
   
     fetch('http://localhost:3000/qrcode')
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
