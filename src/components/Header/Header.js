import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.NewGame = this.NewGame.bind(this);
    }
    NewGame() {
        this.props.reset();
    }
    render() {
        return (
            <div id="header-container">
                <div className="row">
                    <div className="col-6 col-sm-6">
                        <p id="title">2048</p>
                    </div>
                    <div className="col-3 col-sm">
                        <div className="score-container">
                            <p className="head">Score</p>
                            <p className="score">{this.props.score}</p>
                        </div>
                    </div>
                    <div className="col-3 col-sm">
                        <div className="score-container">
                            <p className="head">Best</p>
                            <p className="score">{this.props.highScore}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 col-sm-8">
                        <p id="join">Join the numbers and get to the <strong>2048</strong> tile!</p>
                    </div>
                    <div id="col-2 col-sm-3 reset-container">
                        <div id="reset" onClick={this.NewGame}>New Game</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;