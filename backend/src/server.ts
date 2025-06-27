// server.ts
import express from 'express';//API create panna
import cors from 'cors';//Feontend and Backend connect
import { PrismaClient } from '@prisma/client';//prisma ORM client ku DB Access kuduka

const prisma = new PrismaClient();//prisma object create panna
const app = express();//express create panna

app.use(cors());//React forntend ku intha Backend connect kuduka
app.use(express.json());//React forntend ku intha data JSON format kuduka

// 👉 Only leads return pannum route
app.get("/lead", async (req, res) => {
  try {
    const leads = await prisma.bd_lead.findMany();  // leads mattum fetch
    const appuser = await prisma.user.findMany();
    res.json({leads,appuser});
    console.log("leads and user",leads,appuser)
  } catch (err) {
    console.error("Error fetching leads:", err);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
