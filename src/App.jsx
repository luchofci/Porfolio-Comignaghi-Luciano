import './globalStyles.css'
import './globalStyles.css'

import { NavBar } from './components/NavBar/NavBar'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import User from './components/User/User'
import CopyRigth from './components/Footer/CopyRigth/CopyRigth'



function App() {

  return (
    <>
      <NavBar/>
      <User/>
      
      <h1>Luciano Porfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illum earum, natus amet libero saepe vero fugit assumenda nam ea dignissimos accusantium veniam expedita, ullam doloribus sapiente nisi omnis est.
      Facilis, modi? Doloribus similique aut velit voluptas dolor illo neque eveniet assumenda ipsam facere cum, officia non, possimus expedita quis nisi quisquam. Sed nam aut aperiam aspernatur quisquam rem tempore.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis unde inventore nemo quisquam tempora totam recusandae alias, dolores architecto dicta, enim voluptate nesciunt aliquid cumque velit ea, explicabo odit!
      </p>
      <Skills/>
      <Project/>
      <Contact/>

      <CopyRigth/>

    </>
  )
}
export default App
