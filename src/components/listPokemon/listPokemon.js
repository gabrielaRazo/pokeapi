import React from "react";
import { TextInfo, Title } from "./listPokemon.style";
import Card from "../shared/card/card";
import Col from "../shared/col/col";
import Image from "../shared/image/image";
import Row from "../shared/row/row";

const ListPokemons = ({ listPokemons, infoPokemon, handleClick, onShowPokemonInfo }) => {
    return (
        <Row center>
            {listPokemons.map((pokemon) => (
                <Col lg={2} md={2} sm={5} xs={5} center space>
                    <Card space height={150} selected={infoPokemon.name === pokemon.name}>
                        <div
                            onClick={(e) => {
                                onShowPokemonInfo(pokemon.url);
                                handleClick(e);
                            }}
                        >
                            {infoPokemon.name === pokemon.name ? <Image src={infoPokemon.sprites.front_default} width={100} /> : <TextInfo>Click here to see its picture</TextInfo>}
                            <Title>{pokemon.name}</Title>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
export default ListPokemons;
