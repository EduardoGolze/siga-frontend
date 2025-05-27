import React from 'react';
import Header from '../Header/header';
import Nav from '../Nav/nav';
import Footer from '../Footer/footer';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode; // Definindo explicitamente o tipo
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header titulo="Sistema Acadêmico" />
      <Nav />
      <main className={styles.mainContent}>
        {children} {/* Garantir que as children são renderizadas */}
      </main>
      <Footer />
    </div>
  );
}