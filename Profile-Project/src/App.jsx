import React from 'react'
import { Header } from './components/header/Header'
import './global.css'
import { Footer } from './components/footer/Footer'
import { Profile } from './components/profile/Profile'

export function App() {
  return (
    <>
      <Header></Header>
      <div className='app'>
        <Profile
          avatar= "https://randomuser.me/api/portraits/women/44.jpg"
          name= "Anna Carolina Dias"
          bio= "Desenvolvedora FullStack"
          phone= "+5511987654321"
          email= "annacarolinadias@gmail.com"
          githubUrl= "https://github.com"
          linkedinUrl= "https://www.linkedin.com/in/pinheiro-programador-python/"
          instagramUrl= "https://www.instagram.com/pinheiroprogramadorpython/"
        />
        <Profile
          avatar= "https://randomuser.me/api/portraits/men/32.jpg"
          name= "João Paulo Souza"
          bio= "Desenvolvedor BackEnd"
          phone= "+5511987654322"
          email= "joaopaulosouza@gmail.com"
          githubUrl= "https://github.com"
          linkedinUrl= "https://www.linkedin.com/in/pinheiro-programador-python/"
          instagramUrl= "https://www.instagram.com/pinheiroprogramadorpython/"
          theme="male"
        />
        <Profile
          avatar= "https://randomuser.me/api/portraits/women/55.jpg"
          name= "Mariana Duarte"
          bio= "Designer UI/UX"
          phone= "+5511987654323"
          email= "marianaduarte@gmail.com"
          githubUrl= "https://github.com"
          linkedinUrl= "https://www.linkedin.com/in/pinheiro-programador-python/"
          instagramUrl= "https://www.instagram.com/pinheiroprogramadorpython/"
        />
        <Profile
          avatar= "https://randomuser.me/api/portraits/men/65.jpg"
          name= "Diego Gonçalves"
          bio= "Desenvolvedor FrontEnd"
          phone= "+5511987654324"
          email= "diegogoncalves@gmail.com"
          githubUrl= "https://github.com"
          linkedinUrl= "https://www.linkedin.com/in/pinheiro-programador-python/"
          instagramUrl= "https://www.instagram.com/pinheiroprogramadorpython/"
          theme="male"
        />   
      </div>
      <Footer></Footer>
    </>
  )
}
