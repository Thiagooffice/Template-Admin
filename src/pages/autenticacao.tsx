import { useState } from "react";
import AuthInput from "../components/auth/Authinput";
import { IconeAtencao } from "../components/Icons";
import useAuth from "../data/hook/useAuth";


export default function Autenticacao(){

    const {usuario, loginGoogle} = useAuth()

    const [modo, setModo]=useState<"login" | "cadastro">("login")
    const [erro,setErro] = useState(null)
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    function exibirErro(msg, tempoEMSegundos=5){
        setErro(msg)
        setTimeout(()=> setErro(null), tempoEMSegundos * 1000)
    }

        function submeter(){
            if(modo === "login"){
                console.log("Login")
                
            }else{
                console.log("cadastrar")
                
            }
        }


    return(
        <div className={`
        flex h-sreen items-center justify-center
        `}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img 
                src="https://source.unsplash.com/random" 
                alt="imagem da Tela de Autenticação" 
                className={`h-screen w-full object-cover`}
                />
            </div>
        
        

        <div className={`m-10
        w-full mdw-1/2 lg:w-1/3
        `}>
            <h1 className={`
            text-3xl font-bold mb-5`}>
                {modo === "login" ? "Entre com Sua Conta" : "Cadastre-se na Plataforma"}

            </h1>

            {erro ? (
            <div className={`
            flex items-end
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
            `}>
                {IconeAtencao()}
                <span className={`ml-3`}>{erro}</span>
            </div>
            ) : false}



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
            `} onClick={loginGoogle}>
            Entrar com o Google
            

            </button>

            {modo === 'login' ? (
                <p className={`
                mt-8
                `}>Novo por aqui?
                    <a onClick={()=>setModo('cadastro')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                    `}> Criar uma Conta Gratuitamente
                    </a>
                </p>
            ) : (
                <p className={`
                mt-8
                `}>Ja faz parte da nossa comunidade?
                    <a onClick={()=>setModo('login')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                    `}> Entre com a sua Credenciais
                    </a>
                </p>
            )}

        </div>
        </div>
    )
}