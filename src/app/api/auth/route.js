import { auth, db } from "@/lib/FirebaseConfig";
import {  createUserWithEmailAndPassword } from "firebase/auth";


export default async function POST(req, res) {
    const { email, password, name } = req.body;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: new Date(),
      });

      res.status(201).json({ message: "User created successfully!", user });
    } catch (error) {
      console.error("Error during sign-up:", error);
      res.status(400).json({ error: error.message });
    }
}
