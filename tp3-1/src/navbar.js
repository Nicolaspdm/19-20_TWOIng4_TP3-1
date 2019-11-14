
import React from 'react';

class Navbar extends React.Component {
render() {
   const profils = [];
    return(
      <div class="navbar">
        <button onClick={this.props.onClick}>
            {this.props.nom}
        </button>
        </div>
    );
}
}

export default Navbar;
