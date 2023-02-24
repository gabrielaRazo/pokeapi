import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/shared/card/card";
import Col from "../components/shared/col/col";
import Image from "../components/shared/image/image";
import Row from "../components/shared/row/row";
import { Icon } from "@iconify/react";

const PokemonDetails = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const dispatch = useDispatch();
    const infoPokemon = useSelector((state) => state.dasboardReducer.infoPokemon);
    useEffect(() => {
        dispatch({
            type: "GET_POKEMON_ID_REQUEST",
            id: id,
        });
    }, [id, dispatch]);
    console.log("infoPokemon", infoPokemon);
    return (
        <Row center>
            <Col lg={4} md={4} sm={2} xs={2} space>
                <Icon icon="mdi:arrow-back-circle" onClick={() => navigate("/")} />
            </Col>
            <Col lg={7} md={7} sm={8} xs={8}>
                <Card shadow>
                    <Row center>
                        <Col lg={6} md={6} sm={6} xs={6} space>
                            <h1>{infoPokemon.name}</h1>
                        </Col>
                        <Col lg={2} md={2} sm={6} xs={6}>
                            <h2>Type</h2>
                            <ul>
                                {infoPokemon.types.map((item) => (
                                    <li>{item.type.name}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col lg={6} md={6} sm={10} xs={10}>
                            <Image src={infoPokemon.sprites.back_default} alt="back_default" />
                            <Image src={infoPokemon.sprites.back_female} alt="back_female" />
                            <Image src={infoPokemon.sprites.back_shiny} alt="back_shiny" />
                            <Image src={infoPokemon.sprites.back_shiny_female} alt="back_shiny_female" />
                            <Image src={infoPokemon.sprites.front_default} alt="front_default" />
                            <Image src={infoPokemon.sprites.front_female} alt="front_female" />
                            <Image src={infoPokemon.sprites.front_shiny} alt="front_shiny" />
                            <Image src={infoPokemon.sprites.front_shiny_female} alt="front_shiny_female" />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default PokemonDetails;
