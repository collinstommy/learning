import React from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames, deleteGame } from '../actions';

class GamesPage extends React.Component
{
  componentDidMount(){
    this.props.fetchGames();  
  }

  render(){
    return (
      <div>
        <GamesList games={this.props.games} deleteGame={this.props.deleteGame} />
      </div>
    )
  }
}

GamesPage.protoTypes = {
  games: React.PropTypes.array.isRequired,
  fetchGames: React.PropTypes.func.isRequired,
  deleteGame: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);