import React from 'react'
import { FaHome, FaEnvelope, FaUserFriends } from "react-icons/fa";
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Lista de Perfis</h1>
        <nav className={styles.nav}>
            <a href="#home" className={styles.anc}>
                <FaHome></FaHome>
                Home
            </a>
            <a href="#about" className={styles.anc}>
                <FaUserFriends></FaUserFriends>
                Sobre
            </a>
            <a href="#contact" className={styles.anc}>
                <FaEnvelope></FaEnvelope>              
                Contato
            </a>
        </nav>
    </header>
  )
}
