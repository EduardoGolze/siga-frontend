import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import { useAuth } from "../../contexts/AuthContext";

enum TipoUsuario {
  estudante = "ESTUDANTE",
  professor = "PROFESSOR"
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const [formData, setFormData] = useState({
    tipoUsuario: TipoUsuario.estudante,
    username: "",
    senha: "",
    confirmarSenha: "",
    foto: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.username) newErrors.username = "Nome de usuário é obrigatório";
    if (formData.senha.length < 6) newErrors.senha = "Senha deve ter pelo menos 6 caracteres";
    if (formData.senha !== formData.confirmarSenha) newErrors.confirmarSenha = "Senhas não coincidem";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      await register(formData);
      navigate("/");
    } catch (error) {
      setErrors({ submit: "Erro ao cadastrar. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <main className={styles.main}>
        <h2 className={styles.title}>Cadastre-se</h2>
        
        {errors.submit && <div className={styles.error}>{errors.submit}</div>}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Campos do formulário */}
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar-se"}
          </button>
          
          <div className={styles.loginLink}>
            Já tem uma conta? <Link to="/">Faça login</Link>
          </div>
        </form>
      </main>
    </section>
  );
};

export default RegisterPage;