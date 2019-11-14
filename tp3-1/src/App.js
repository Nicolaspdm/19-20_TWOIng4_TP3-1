import React from 'react';
import './App.css';
import Profil from "./profil.js";
import Nico from './photos/photoppnico.png';

class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profil : [
        {
          photo: Nico,
          prenom: "Nicolas",
          nom: "PRINCE",
          bd: "04/06/1998",
          Derncomm: "Envoie un mp si t'as envie de discuter okalm.",
        }
      ],
      show_profil: 0
    };
  }

  handleClick(i){
      this.setState({show_profil: i})
  }


  render() {
   const profiles = [];


   return(
       <body className="Container">
         <header>

         </header>
         <main className="profil">
           <Profil
               photo={this.state.profil[this.state.show_profil].photo}
               prenom={this.state.profil[this.state.show_profil].prenom}
               nom={this.state.profil[this.state.show_profil].nom}
               bd={this.state.profil[this.state.show_profil].bd}
           />

         </main>
       </body>
   );
 }
}

export default Container;
