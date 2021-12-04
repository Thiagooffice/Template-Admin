import { useState } from "react";
import AuthInput from "../components/auth/Authinput";


export default function Autenticacao(){

    const [modo, setModo]=useState<"login" | "cadastro">("login")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

        function submeter(){
            if(modo === "login"){
                console.log("Login")
            }else{
                console.log("cadastrar")
            }
        }


    return(
        <div className={`
        flex flex-col h-sreen items-center justify-center
        `}>
        
        

        <div className={`
        w-1/2
        `}>
            <h1 className={`
            text-xl font-bold mb-5`}>
                {modo === "login" ? "Entre com Sua Conta" : "Cadastre-se na Plataforma"}

            </h1>
            <AuthInput 
            label="Email"
            tipo="email"
            valor={email}
            valorMudou={setEmail}
            obrigatorio
            />
            <AuthInput 
            label="Senha"
            tipo="password"
            valor={senha}
            valorMudou={setSenha}
            obrigatorio
            />

            <button className={`
            w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-full px-4 py-3 mt-6
            `} onClick={submeter}>
            {modo === "login" ? "Entrar" : "Cadastrar"}

            </button>

            <hr  className={`
            my-6 border-gray-300 h-full`}/>
            
            <button className={`
            w-full bg-red-500 hover:bg-red-400 text-white rounded-full px-4 py-3
            `} onClick={submeter}>
            Entrar com o Google
            

            </button>
        </div>
        </div>
    )
}