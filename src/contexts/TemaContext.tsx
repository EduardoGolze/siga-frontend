import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Tema = 'light' | 'dark' | 'impress';

interface TemaContextType {
  tema: Tema;
  alterarTema: (novoTema: Tema) => void;
}

const TemaContext = createContext<TemaContextType>({
  tema: 'light',
  alterarTema: () => {}
});

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(() => {
    const temaSalvo = localStorage.getItem('tema') as Tema | null;
    return temaSalvo || 'light';
  });

  useEffect(() => {
    document.body.className = tema;
    localStorage.setItem('tema', tema);
  }, [tema]);

  const alterarTema = (novoTema: Tema) => {
    setTema(novoTema);
  };

  return (
    <TemaContext.Provider value={{ tema, alterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export const useTema = () => {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error('useTema deve ser usado dentro de um TemaProvider');
  }
  return context;
};