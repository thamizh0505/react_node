import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

interface appusers {
  id:number;
  username:String;
  password:String;
}

function App() {
  const [appuser ,setuser] = useState<appusers[]>([]);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/lead")
      .then((response) => {
        setuser(response.data.appuser);
        console.log("setlead",response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const usermatch = appuser.find((user) => user.username === username && user.password === password);
  if (usermatch) {
    console.log("✅ Login success!");
    seterror("");
    navigate("/home");
  } else {
    seterror("Invalid username or password");
  }
};
  

  return (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    flexDirection:'column'
  }}>
    <div>

    <h1>Login lesoko</h1>
    </div>
    <div >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',gap:'10px' }}>
        <label htmlFor="username">Username:</label>
        <input type="text" value={username} id="username" placeholder="Username" onChange={(e) => setusername(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" value={password} id="password" onChange={(e) => setpassword(e.target.value)}/>
        <button type="submit" >Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  </div>
);

}

export default App;