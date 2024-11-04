
import './index.css'
export default function Login() {
    return (
      <main id="login">
        <article></article>
        <article></article>
        <form>
          <h1>Bem Vindo De Volta</h1>
          <label>Email</label>
          <input type="email" required placeholder="exemple@gmail.com" />
          <label>Senha</label>
          <input type="password" placeholder="Senha" required />
          <div>
            <button type="submit">Entrar</button>
            <button type="button">Criar Conta</button>
          </div>
        </form>
      </main>
    );
}