
import { useState } from 'react';
import './index.css'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css'

export default function Login() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password : ''
  })
  const [create , setCreate] = useState(false)

  async function CreateCount() {

    if (!userData.email || userData.name.length < 2 || userData.password.length < 8) {
        console.log(userData)
        toast.warn("Prencha os Campos");
        return
      }
      const API = await fetch("http://localhost:8080/user", {
        headers: {
          'Content-Type' : 'application/json'
        },
        method: 'POST',
        body : JSON.stringify(userData)
      });
      const response = await API.json()
      if (response?.data) {
        toast.success("Conta Criada Com Sucesso!")
        document.forms[0].reset()
        setCreate(false)
        return true
      } else {
        toast.error("Email Existente!");
        return false
      }
    
    
  }
  async function Enter() {

    if (!userData.email || !userData.password.length ) {
        toast.warn("Prencha os Campos");
        return
      }
      const API = await fetch("http://localhost:8080/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userData),
      });
      const response = await API.json()
      if (response?.token) {
        toast.success("Logado com Sucesso!");
        localStorage.setItem("token", response?.token)
        navigate("/")
        return true;
      } else {
        toast.error("Palavra Passe ou email Incorrecto!");
        return false;
      }
  }
    return (
      <main id="login">
        <ToastContainer />
        <form>
          <h1>{create ? "Criar Conta" : "Entrar"}</h1>
          {create && (
            <>
              <label>Nome</label>
              <input
                type="text"
                required
                placeholder="Seu nome de usuário"
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </>
          )}
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="exemple@gmail.com"
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          {create ? (
            <button
              type="button"
              onClick={async () => {
                await CreateCount();
              }}
            >
              Criar Conta
            </button>
          ) : (
            <button
              type="button"
              onClick={async () => {
                await Enter();
              }}
            >
              Entrar
            </button>
          )}
          <a
            onClick={() => {
              document.forms[0].reset();
              setCreate((prev) => !prev);
            }}
          >
            {create
              ? "Já te uma uma conta? . Entrar"
              : "Ainda não tem uma conta , cria!"}
          </a>
        </form>
      </main>
    );
}