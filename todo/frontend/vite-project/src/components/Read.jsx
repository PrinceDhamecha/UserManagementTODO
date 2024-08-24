import React, { useEffect, useState } from 'react'

function Read() {

  const [data, setdata] = useState([])


  async function getData() {
    const response = await fetch("http://localhost:3500/");

    const result = await response.json()

    if (!response.ok) {
      console.log(result)

    }

    if (response.ok) {

      setdata(result)
    }
  }


   const handledeletes = async (id) =>{
   
    const response = await fetch(`http://localhost:3500/${id}`,{
      method:'DELETE',
    })
    const result = await response.json();

    if (!response.ok) {
      console.log(result)

    }

    if (response.ok) {
      console.log(result)
      getData()
    }


  }

 

  
  useEffect(() => {
    getData()
  }, [])


  // console.log('data is',data);
  // console.log(Array.isArray(data)); 

  return (
    <>


      <h1 className='text-center'>Read</h1>
      <div className='d-flex flex-wrap'>
      {data.map((ele) => (
        
        <div className="card text-bg-success d-flex text-center w-100" >
        <div className="card text-bg-danger" >
          <div className="card-header">{ele.name}</div>
          <div className="card-body">
            <h5 className="card-title">{ele.email}</h5>
            <p className="card-text">{ele.age}</p>
            <button onClick={() => window.location.href = `http://localhost:5173/${ele._id}`}>Edit</button>
            <button onClick={() => handledeletes(ele._id)}>Delete</button>
          </div>
        </div>
      </div>
      
    ))}

      </div>
     
    </>


  )
}





export default Read