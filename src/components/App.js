import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Content from './Content'
import './App.css'


const App = () => {
  return(
<div className="app">

<Header headerTitle="Manny Calavera's Header For the Epic React HolyGrail" />
<div className="main">
<Sidebar foodOne="Borsch" foodTwo="Vareniki" foodThree="Spaghetti" foodFour="PineApple" />
<Content />

</div>
<Footer footerTitle="An Epic Footer title here" />
</div>

  )
}

export default App;