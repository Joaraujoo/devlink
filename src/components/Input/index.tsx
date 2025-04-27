import { InputHTMLAttributes } from "react"; //Importa as propriedades validas de um input


type InputProps = InputHTMLAttributes<HTMLInputElement>

//Funçao que recebe qualquer propriedade de um input comum
export function Input(props: InputProps){
    return(
        <input 
            className="border-0 h-9 rounded-md outline-none px-2 mb-3 bg-white"
            {...props} //Aplica todas as propriedades que sao passadas
        />
    )
}