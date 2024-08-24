import React, { useState } from "react"
import {useNavigate} from 'react-router-dom';

function Create() {
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [age, Setage] = useState(0);
  const [error, Seterror] = useState('')

  const navigate = useNavigate();

  console.log(name, email, age);

  const handleCreate = async (e) => {

    e.preventDefault()

    const addUser = { name, email, age }


    const response = await fetch("http://localhost:3500/", {
      method: 'POST',
      body: JSON.stringify(addUser),
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
      console.log(result);
      Seterror("")
      Setname("")
      Setage(0)
      Setemail("")
      navigate('/all')
    }
  }


  return (
    <>
      <h1>Create</h1>
      {error && <div className="alert alert-info" role="alert">{error}</div>}
      <form onSubmit={handleCreate}>
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

export default Create
