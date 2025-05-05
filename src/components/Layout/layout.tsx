import Header from '../Header/header';
import Nav from '../Nav/nav';
import Footer from '../Footer/footer';
import './Layout.css';
import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header titulo="SIGA React" />
      <Nav />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}