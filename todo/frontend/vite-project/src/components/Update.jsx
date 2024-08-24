import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [age, Setage] = useState(0);
  const [error, Seterror] = useState('')
  const {id} = useParams()
  const navigate = useNavigate();


  const getsingleuser = async()=>{
    
    const response = await fetch (`http://localhost:3500/${id}`)
    const result = await response.json();

    if (!response.ok) {
      console.log('no',result)

    }

    if (response.ok) {
      console.log('ok');
      console.log(result)
      Setname(result.name)
      Setemail(result.email)
      Setage(result.age)
      
    }
  }

  const handleupdate = async(e)=>{
    e.preventDefault()

    const updateuser = { name, email, age }


    const response = await fetch(`http://localhost:3500/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateuser),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const result = await response.json({})

    if (!response.ok) {
      Seterror(result);
      console.log(result)
    }

    if (response.ok) {
      console.log('ok',result);
      navigate('/all')
    }
  }


 useEffect(() => {
  getsingleuser()
 }, [])
 

  return (
    <>
    <h1>Upadate</h1>

    {error && <div className="alert alert-info" role="alert">{error}</div>}
    <form onSubmit={handleupdate}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => Setname(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => Setemail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="Number" className="form-control" value={age} onChange={(e) => Setage(e.target.value)} />
      </div>



      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Update