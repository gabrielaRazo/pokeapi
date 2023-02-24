import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";

const mockInfoPokemon = {
    name: "bulbasaur",
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    types: [
        {
            type: {
                name: "grass",
            },
        },
        {
            type: {
                name: "poison",
            },
        },
    ],
    abilities: [
        {
            ability: {
                name: "overgrow",
            },
        },
        {
            ability: {
                name: "chlorophyll",
            },
        },
    ],
};

const setup = () => render(<PokemonDetails infoPokemon={mockInfoPokemon} />);

describe("PokemonDetails", () => {
    it("displays the name of the pokemon and its image", async () => {
        setup();
        const name = await screen.getByText(/bulbasaur/i);
        expect(name).toBeInTheDocument();
        const image = await screen.findByRole("img", { altText: "bulbasaur" });
        expect(image).toHaveAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
    });

    it("displays the type of pokemon", async () => {
        setup();
        const grassType = await screen.getByText(/grass/i);
        expect(grassType).toBeInTheDocument();
        const poisonType = await screen.getByText(/poison/i);
        expect(poisonType).toBeInTheDocument();
    });

    it("displays the abilities of the pokemon", async () => {
        setup();
        const overgrowAbility = await screen.getByText(/overgrow/i);
        expect(overgrowAbility).toBeInTheDocument();
        const chlorophyllAbility = await screen.getByText(/chlorophyll/i);
        expect(chlorophyllAbility).toBeInTheDocument();
    });
});
