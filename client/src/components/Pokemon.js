//rcep time to party

import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Pokemon extends Component {
  constructor(props) {
    super(props);
  }
    static propTypes = {
      pokemon: PropTypes.any
  };
  componentDidMount() {

  }
  render() {
    return (
    <div className="pokemon">
            {/* {
                this.props.allPokemon.map((pokemon) => 
                <div key={pokemon.id}>
                    <img src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default} 
                    alt="Pokemon" />
                    <p>{pokemon.name}</p>
                    <ul>{pokemon.types.map((single) => <li key={single.slot}>{single.type.name}</li>)}</ul>
                </div>
                )
            } */}
            {
              <div>
                  <p>{this.props.pokemon.name}</p>
                  <img className='m-auto'src={this.props.pokemon.sprites.front_default} alt="Pokemon" />
                  <ul>
                  {
                  this.props.pokemon.types.map((single) => <li key={single.slot}>{single.type.name}</li>)
                  }
                  </ul>
              </div>
            }
    </div>
    
    );
  }
}

export default Pokemon;
