import React from "react";
import Col from "../shared/col/col";
import Image from "../shared/image/image";
import Row from "../shared/row/row";
import { Name, SubTitle, Text } from "./pokemonDetails.style";

const PokemonDetails = ({ infoPokemon }) => {
    return (
        <Row>
            <Col lg={5} md={5} sm={5} xs={5} center>
                <Name>{infoPokemon.name}</Name>
                <Image src={infoPokemon.sprites.front_default} alt="front_default" />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
                <Row>
                    <Col lg={5} md={5} sm={12} xs={12}>
                        <SubTitle>Type</SubTitle>
                        <Text>
                            {infoPokemon.types.map((item) => (
                                <li> {item.type.name}</li>
                            ))}
                        </Text>
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12} space>
                        <SubTitle>Abilities</SubTitle>
                        <Text>
                            {infoPokemon.abilities.map((item) => (
                                <li> {item.ability.name}</li>
                            ))}
                        </Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default PokemonDetails;
