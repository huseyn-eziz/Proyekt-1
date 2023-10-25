import React, { useContext } from 'react'
import { MenimContext } from '../Context/Context'
import Footer from './Footer'

const App = () => {
  const istifadeedeceyim = useContext(MenimContext)

  return (
    <div>
      {istifadeedeceyim.id }
      <hr/>
      <Footer/>
    </div>
  )
}

export default App








// import React from 'react';
// import Footer from './Footer';
// import { useContext } from 'react';
// import { MyContext } from '../Context/Context';

// function App() {
//   const d = useContext(MyContext)
//   return (
//     <div>
//       <h1>{d.id}</h1>
//       <p></p>
//       <Footer />
//     </div>
//   );
// }

// export default App;
