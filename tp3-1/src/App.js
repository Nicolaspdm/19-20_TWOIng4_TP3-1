import React from 'react';
import './App.css';
import Profil from "./profil.js";
import Publi from "./publi.js";
import Navbar from "./navbar.js";
import Nico from './photos/photoppnico.png';
import Joseph from './photos/josephpp.jpg';
import Paul from './photos/Paul.jpg';

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
          publi: "Envoie un mp si t'as envie de discuter okalm.",
        },
        {
          photo: Joseph,
          prenom: "Joseph",
          nom: "DUPONT",
          bd: "18/10/1998",
          publi: "Partout et nul part à la fois, trouvez moi dans les égouts ! Il y fait chaud et bon vivre!",
        },
        {
          photo: Paul,
          prenom: "Paul",
          nom: "GHAZAL",
          bd: "04/20/1998",
          publi: "Toi même tu sais d'ou je viens... Ma lecture préferée ? Tetu Magazine.",
        },
      ],
      show_profil: 0
    };
  }

  handleClick(i){
      this.setState({show_profil: i})
  }


  render() {
   const profiles = [];

   for (const [index, value] of this.state.profil.entries()) {
       profiles.push(<Navbar prenom={value.nom}
                             onClick={() => this.handleClick(index)}
       />)
     }

   return(
       <body className="Container">
         <header>
         <nav className="nav">
              {profiles}
            </nav>
         </header>
         <main className="profil">
           <Profil
               photo={this.state.profil[this.state.show_profil].photo}
               prenom={this.state.profil[this.state.show_profil].prenom}
               nom={this.state.profil[this.state.show_profil].nom}
               bd={this.state.profil[this.state.show_profil].bd}
           />

           <Publi
               publi={this.state.profil[this.state.show_profil].publi}
          />

         </main>
       </body>
   );
 }
}

export default Container;
