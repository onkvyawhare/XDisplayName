import {useState} from "react";


function Fullname() {

  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const [fullName, setFullName] = useState('');

  const handleSubmit=()=>{
    if(!firstName || !lastName){
      alert('Please fill out all fields.');
      return;
    }
    else{
      setFullName(`Full name:${firstName} ${lastName}`);
    }

  }


  return (
    <div >
      <h1>Full Name display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          id="firstname"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required

          />

          <br></br>

       <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          id="lasstname"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
            />
       <br></br>

       <button type="submit">Submit</button>
        
      </form>
      {fullName && (
      <div>{fullName}</div>
    )}
    </div>
  );
}

export default Fullname;
