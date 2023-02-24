import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ListPokemons from "./listPokemon";

const mockListPokemons = [
    {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
];
const mockInfoPokemon = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
};
const mockHandleClick = jest.fn(); // track how it's called mockHandleClick
const mockOnShowPokemonInfo = jest.fn(); //track how it's called mockInfoPokemon

const setup = () => render(<ListPokemons listPokemons={mockListPokemons} infoPokemon={mockInfoPokemon} handleClick={mockHandleClick} onShowPokemonInfo={mockOnShowPokemonInfo} />);

describe("ListPokemons", () => {
    it("the app should call the onShowPokemonInfo and handleClick  when a pokemon is clicked", async () => {
        setup();
        const pokemon1 = screen.getByText("bulbasaur");
        fireEvent.click(pokemon1);
        expect(mockOnShowPokemonInfo).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1/");
        expect(mockHandleClick).toHaveBeenCalled();
    });

    it("renders a list of pokemons with their names and images", async () => {
        setup();
        const pokemon1 = screen.getByText("bulbasaur");
        expect(pokemon1).toBeInTheDocument();
        const pokemon2 = screen.getByText("ivysaur");
        expect(pokemon2).toBeInTheDocument();
        const image1 = await screen.findByRole("img", { altText: "bulbasaur" });
        expect(image1).toBeInTheDocument();
        const image2 = await screen.findByRole("img", { altText: "ivysaur" });
        expect(image2).toBeInTheDocument();
        const whoIsThatPokemon = screen.getByText("Who is that pokemon?");
        expect(whoIsThatPokemon).toBeInTheDocument();
    });
});
