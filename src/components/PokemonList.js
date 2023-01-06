import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Bulbasaur from './pokemon_images/001 Bulbasaur.jpg'
import Ivysaur from './pokemon_images/002 Ivysaur.jpg'
import Venasaur from './pokemon_images/003 Venasaur.jpg'
import Charmander from './pokemon_images/004 Charmander.jpg'
import Charmeleleon from './pokemon_images/005 Charmeleon.jpg'
import Charizard from './pokemon_images/006 Charizard.jpg'

const PokemonList = () => {
    const [firstChoiceOpen, setFirstChoiceOpen] = useState(false);
    const [secondChoiceOpen, setSecondChoiceOpen] = useState(false);

    const list = [
        {
            name: 'Bulbasaur',
            pokedexNumber: 1,
            attack: 20,
            hp: 50,
            defense: 120,
            speed: 10,
            image: Bulbasaur
        },
        {
            name: 'Ivysaur',
            pokedexNumber: 2,
            attack: 20,
            hp: 50,
            defense: 120,
            speed: 10,
            image: Ivysaur
        },
        {
            name: 'Venasaur',
            pokedexNumber: 3,
            attack: 20,
            hp: 50,
            defense: 120,
            speed: 10,
            image: Venasaur
        },
        {
            name: 'Charmander',
            pokedexNumber: 4,
            attack: 20,
            hp: 50,
            defense: 120,
            speed: 10,
            image: Charmander
        },
        {
            name: 'Charmeleleon',
            pokedexNumber: 5,
            attack: 20,
            hp: 50,
            defense: 120,
            speed: 10,
            image: Charmeleleon
        },
        {
            name: 'Charizard',
            pokedexNumber: 6,
            attack: 20,
            hp: 50,
            defense: 120,
            speed: 10,
            image: Charizard
        },
    ]

    return (
        <div className="">
            <Dropdown isOpen={firstChoiceOpen} toggle={() => setFirstChoiceOpen(!firstChoiceOpen)}>
                <DropdownToggle caret>
                    First Pokemon
                </DropdownToggle>
                <DropdownMenu>
                    {list.map(pokemon => (
                        <DropdownItem href={pokemon.name} key={pokemon.pokedexNumber}>{pokemon.name}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <br/>
            <Dropdown isOpen={secondChoiceOpen} toggle={() => setSecondChoiceOpen(!secondChoiceOpen)}>
                <DropdownToggle caret>
                    Second Pokemon
                </DropdownToggle>
                <DropdownMenu>
                    {list.map(pokemon => (
                        <DropdownItem href={pokemon.name} key={pokemon.pokedexNumber}>{pokemon.name}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>


    );
};

export default PokemonList;
