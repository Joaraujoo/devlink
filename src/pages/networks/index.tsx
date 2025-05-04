import { FormEvent, useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { db } from "../../services/firebaseConnection";
import {setDoc, doc, getDoc} from "firebase/firestore"


export function Networks() {

  const [instagram, setInstagram] = useState("")
  const [linkedin, setLinkedin] = useState("")

  useEffect(() => { 
    function loadLinks(){
      const docRef = doc(db, "social", "link")

      getDoc(docRef)
      .then((snapshot) => {
          if(snapshot.data() !== undefined){
              setInstagram(snapshot.data()?.instagram)
              setLinkedin(snapshot.data()?.linkedin)
          }
      })
    }

    loadLinks()
  }, [])

  function handleRegister(e: FormEvent){
    e.preventDefault()

    setDoc(doc(db, "social", "link"), {
      instagram: instagram,
      linkedin: linkedin
    })
    .then(() => {
      console.log("Cadastrado com sucesso")
    })
    .catch((error) => {
      console.log("Erro" + error)
    })
  }

    return(
      <div className="flex items-center flex-col min-h-screen pb-2">
        <Header/>

        <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

        <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
          <label className="text-white font-medium mb-2 mt-2">Link do instagram</label>
            <Input 
              type="url"
              placeholder="Digite a url do Instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />

            <label className="text-white font-medium mb-2 mt-2">Link do Linkedin</label>
            <Input 
              type="url"
              placeholder="Digite a url do Linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />

            <button
              type="submit"
              className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
            >
              Salvar links
            </button>
            
        </form>
      </div>
    )
  }