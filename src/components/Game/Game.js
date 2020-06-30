import React from 'react';
import './Game.css';
import Cell from '../Cell/Cell';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let Style, text;
        switch (this.props.gameState) {
            case 'win': {
                Style = {
                    color: '#f9f6f2',
                    backgroundColor: 'rgba(237, 194, 46, 0.5)',
                }
                text = "YOU WIN!"
                break;
            }
            case 'lose': {
                Style = {
                    backgroundColor: 'rgba(238, 228, 218, 0.73)',
                    color: '#776e65',
                }
                text = "Game Over!"
                break;
            }
            default: {
                Style = {
                    opacity: '0',
                }
            }
        }
        return (
            <div id="game-container">
                <div id="overlay" style={Style}>
                    {text}
                </div>
                <div className="row game-row">
                    <div className="col">
                        <Cell value={this.props.board[0][0]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[0][1]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[0][2]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[0][3]} />
                    </div>
                </div>
                <div className="row game-row">
                    <div className="col">
                        <Cell value={this.props.board[1][0]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[1][1]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[1][2]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[1][3]} />
                    </div>
                </div>
                <div className="row game-row">
                    <div className="col">
                        <Cell value={this.props.board[2][0]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[2][1]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[2][2]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[2][3]} />
                    </div>
                </div>
                <div className="row game-row">
                    <div className="col">
                        <Cell value={this.props.board[3][0]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[3][1]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[3][2]} />
                    </div>
                    <div className="col">
                        <Cell value={this.props.board[3][3]} />
                    </div>
                </div>

            </div>);
    }
}
export default Game;