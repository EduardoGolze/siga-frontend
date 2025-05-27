import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    nome: "",
    senha: ""
  });
  
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.senha) {
      setError("Nome e senha são obrigatórios");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await login(formData.nome, formData.senha);
      if (success) {
        navigate("/home");
      } else {
        setError("Nome ou senha incorretos");
      }
    } catch (err) {
      setError("Erro ao fazer login");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.loginContainer}>
      <h2>Login</h2>
      
      {error && <div className={styles.error}>{error}</div>}
      
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.loginButton} disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>

        <div className={styles.registerLink}>
          <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
        </div>
      </form>
    </section>
  );
}