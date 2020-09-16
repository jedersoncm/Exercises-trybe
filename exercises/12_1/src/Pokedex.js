import React from 'react';
import Pokemon from './Pokemon';

//  Finalizado

class Pokedex extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.handleFire = this.handleFire.bind(this);
    this.handlePsychic = this.handlePsychic.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);

    this.state = {
      index: 0,
      type: 'all'
    }
  }

  handleClick(length) {
    this.setState((estadoAnterior) => ({
      index: (estadoAnterior.index + 1) % length
    }))
  }

  handleFire() {
    this.setState({ type: 'Fire'})
  }

  handlePsychic() {
    this.setState({ type: 'Psychic'})
  }

  filterPokemons() {
    if (this.state.type === 'all') {
      return this.props.pokemons;
    } else {
      return this.props.pokemons.filter(pokemon => pokemon.type === this.state.type);
    }
  }

    render() {
      const newList = this.filterPokemons();
      const length = newList.length;
        return (
          <div>
            <div className="pokedex">
            {newList.map((pokemon, index) => {
              if (this.state.index === index){
                return <Pokemon key={pokemon.id} pokemon={pokemon} />
              }
            }
            )}
            </div>
            <button onClick={() => this.handleClick(length)}>Next Pokemon</button>
            <button onClick={this.handleFire}>Fire</button>
            <button onClick={this.handlePsychic}>Psychic</button>
          </div>
        );
    }
}

export default Pokedex;