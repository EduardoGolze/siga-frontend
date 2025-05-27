import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserData {
  tipoUsuario: string;
  nome: string;
  senha: string;
  foto?: string;
  cpf: string;
  dataNascimento: string;
}

interface AuthContextType {
  user: UserData | null;
  autenticado: boolean;
  register: (userData: UserData) => Promise<void>;
  login: (nome: string, senha: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  autenticado: false,
  register: async () => {},
  login: async () => false,
  logout: () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const autenticado = !!user;

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (userData: UserData) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        resolve();
      }, 500);
    });
  };

  const login = async (nome: string, senha: string) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.nome === nome && userData.senha === senha) {
        setUser(userData);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, autenticado, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};