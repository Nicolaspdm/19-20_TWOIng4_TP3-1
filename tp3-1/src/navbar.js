
import React from 'react';

class Navbar extends React.Component {
render() {
    return(
      <div class="navbar">
        <button onClick={this.props.onClick}>
            {this.props.prenom}
        </button>
        </div>
    );
}
}

export default Navbar;
