import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from './profile.module.css'

export function Profile(props) {
  return (
    <div className={styles.profile}>
        <img src={props.avatar} alt={props.name} className={styles.avatar}/>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.info}>{props.bio}</div>
        <div className={styles.info}>{props.phone}</div>
        <div className={styles.info}>{props.email}</div>
        <div className={styles.redesocial}>
            <a href={props.githubUrl} className={props.theme === "male" ? styles.ancmale : styles.anc} target='_blank' rel='noreferer'>
               <FaGithub className={styles.icon}></FaGithub>
               GitHub 
            </a>
            <a href={props.linkedinUrl} className={props.theme === "male" ? styles.ancmale : styles.anc} target='_blank' rel='noreferer'>
                <FaLinkedin className={styles.icon}></FaLinkedin>
                Linkedin
            </a>
            <a href={props.instagramUrl} className={props.theme === "male" ? styles.ancmale : styles.anc} target='_blank' rel='noreferer'>
                <FaInstagram className={styles.icon}></FaInstagram>
                Instagram
            </a>
        </div>
    </div>
  )
}
