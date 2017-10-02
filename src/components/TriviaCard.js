// TriviaCard.js

import React, { Component } from 'react'

export default class TriviaCard extends Component {
  render(){
    return(
      <div className="card">
        <img className="card-img" href="%PUBLIC_URL%/littleDrag.jpg" alt="Card image" />
        <div className="card-img-overlay">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

    )
  }

//below is my suggestion for a populated character card; should be able to just copy/paste this in above if it all looks okay -Ryan
//   render(){
//     let charInfo = props.charInfo;
//     return(
//       <div className="character card">
//         {/* //right now we don't have images for every character in the array; not sure if we want to keep pictures in or not, or we can do placeholders for ones we don't have? - Ryan
//         <img className="card-img" href="%PUBLIC_URL%/littleDrag.jpg" alt="Card image" /> */}
//         <div className="card-img-overlay">
//           <h4 className="card-title">{charInfo.name}</h4>
//           <p className="card-text">
//             <ul>
//               <li className="character-info">Born: {charInfo.born}</li>
//               <li className="character-info">Culture: {charInfo.culture}</li>
//               <li className="character-info">Titles: {charInfo.titles}</li>
//               <li className="character-info">Aliases: {charInfo.aliases}</li>
//             </ul>
//           </p>
//           <p className="card-text"><small className="text-muted">Played by  {charInfo.playedBy}</small></p>
//         </div>
//       </div>
//   )
// }











}