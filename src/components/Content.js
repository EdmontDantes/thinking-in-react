import React from 'react'
import Square from './Square'
import './Content.css'


const Content = (props) => {
  return(
    <div>
    
    <div className="content">
      <div className='image'>
        <img src="/images/kitten-playing-with-toy-mouse-royalty-free-image-590055188-1542816918.jpg" alt="Cute Kitten Royalty Free Downloaded From Google Search" />
      </div>
      <div className="textContent">
        <div className="textTitle"><h1>Some Cool Title for my Text Content</h1></div>
        <div className="text">
          <p>Monocle ipsum dolor sit amet k-pop cutting-edge efficient punctual joy, 
          izakaya Melbourne eclectic Baggu soft power emerging Airbus A380. Charming airport Shinkansen craftsmanship 
          Fast Lane emerging delightful classic carefully curated. Melbourne St Moritz Helsinki cosy efficient remarkable, 
          alluring sharp izakaya. Craftsmanship K-pop charming intricate Airbus A380 quality of life Beams impeccable. 
          Baggu Nordic global Porter charming, delightful craftsmanship concierge Zürich quality of life sophisticated eclectic. 
          Conversation Asia-Pacific remarkable liveable Ettinger. Ginza sophisticated emerging pintxos eclectic.</p>
        </div>
      </div>
      <div className="squares">
        <Square squareColor="red" />
        <Square squareColor="green" />
        <Square squareColor="blue" />
      </div>
    </div>
    
    </div>

  )
}

export default Content;