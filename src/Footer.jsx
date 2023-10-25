import React, { useContext } from 'react'
import { MenimContext } from '../Context/Context'
import { UsEmailContext } from '../Context/UserEmailContext'

const Footer = () => {
  const ehmedzade =  useContext(MenimContext)
  const email = useContext(UsEmailContext)
  return (
    <div>
      {ehmedzade.name + ehmedzade.surname} +
      {email}
    </div>
  )
}

export default Footer






// import React, { useContext } from 'react';
// import { MyContext } from '../Context/Context';


// function Footer() {
//     const ddd= useContext(MyContext)
//   return (
//       <footer>
//         {ddd.id}
//       </footer>
//   );
// }

// export default Footer;
