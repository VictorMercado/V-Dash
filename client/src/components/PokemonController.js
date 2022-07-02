//rcep
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Pokemon from './Pokemon';

export class PokemonController extends Component {
    static propTypes = {};
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            pokemon: null
        };
    }
    async componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const urlRand = url + Math.floor((1000 * Math.random()) % 898);
        const url10 = "https://pokeapi.co/api/v2/pokemon?limit=10";
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'applications/json'
            }
        };
        const response = await fetch(urlRand, options);
        const data = await response.json();
        console.log(data);
        this.setState({loading: false, pokemon: data});
    }

    render() {
        return <div className=''>
        {
            this.state.loading || !this.state.pokemon ? 
            <div className="bg-red-400">loading</div>
            : 
            <Pokemon pokemon={this.state.pokemon}></Pokemon>
            
        }
    </div>;
    }
}

export default PokemonController;
