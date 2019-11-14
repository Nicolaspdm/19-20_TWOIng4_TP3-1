import React from 'react';

class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        }
    }


    render() {
        return(
            <div className="cont-profil">

                <img src={this.props.photo}
                     alt="prophoto"/>

                <div className="prodesc">
                    <a class="tst">{this.props.prenom}</a>
                    <a class="tst">{this.props.nom}</a>
                    <a class="tst">{this.props.bd}</a>
                </div>
                <div className="prostyle">
                    <button id="style"
                            onClick={this.handleClick}>
                        Change style
                    </button>
                </div>
            </div>
        );
    }
}

export default Profil;
