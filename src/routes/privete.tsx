import { ReactNode, useState, useEffect } from "react" //ReactNode: tipo do React para componentes filhos (children).
import {auth} from "../services/firebaseConnection"
import { onAuthStateChanged } from "firebase/auth" //Função do Firebase que fica observando se o usuário está logado ou deslogado.
import { Navigate } from "react-router-dom"

interface PrivateProps{
    children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Private({ children }: PrivateProps): any{

    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => { 
        
       //Escuta o Firebase para saber se o usuário está logado (Sempre que o estado de login muda a funçao é chamada)
       const unsub = onAuthStateChanged(auth, (user) => {

        //Se Logado
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }

                //Salva o objeto acima no localStorage
                localStorage.setItem("@reactlinks", JSON.stringify(userData))
                setLoading(false)
                setSigned(true)

            }else{
                setLoading(false)
                setSigned(false)
            }
        })

        //Remove o listener quando o componente desmontar (evitar vazamentos de memória).
        return () => {
            unsub()
        }

    }, [])

    //Não renderiza nada enquanto carrega
    if(loading){
        return <div></div>
    }

    //Usuario nao esta logado
    if(!signed){
        return <Navigate to="/login" />
    }

    //Usuario logado
    return children;
}