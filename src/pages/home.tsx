import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Modal from "../components/modal/LeadModal";
import "../App.css";

interface lead {
  id: number;
  lead_name: String;
  lead_source: String;
  lead_description: String;
  lead_stage: String;
  lead_created_on: String;
  updated_at: String;
  contact_no: String;
  secondary_no: String
}

function Home() {
  const [leads, setlead] = useState<lead[]>([]);
 
  useEffect(() => {
    axios
      .get("http://localhost:3000/lead")
      .then((response) => {
        setlead(response.data.leads);
        console.log("setlead", response.data.leads)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="main-container">
      <Header />
      <div className="body-container">
        <Sidebar />
        <div className="content-area">
          <div className="bd_lead">
            <h1>Welcome to Leads !</h1>
            <button className="addbtn">+ Lead</button>
           <Modal />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;