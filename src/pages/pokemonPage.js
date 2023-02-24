import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/shared/card/card";
import Col from "../components/shared/col/col";
import Image from "../components/shared/image/image";
import Row from "../components/shared/row/row";
import { Icon } from "@iconify/react";
import IconWrap from "../components/shared/iconWrap/iconWrap";
import { Container, Name, SubTitle, Text } from "./pokemonDetails.style";
import Tooltip from "../components/shared/tooltip/tooltip";

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
    console.log("id", id);

    return (
        <Container>
            <Row center>
                <Col lg={1} md={1} sm={1} xs={1} space>
                    <Tooltip text="Return to previews page">
                        <IconWrap width={"30px"} heigth={"30px"} clickable>
                            <Icon icon="mdi:arrow-back-circle" onClick={() => navigate("/")} />
                        </IconWrap>
                    </Tooltip>
                </Col>
                <Col lg={7} md={7} sm={10} xs={10}>
                    <Card shadow>
                        <Row center>
                            <Col lg={5} md={5} sm={5} xs={5} center>
                                <Image src={infoPokemon.sprites.front_default} alt="front_default" />
                                <Name>{infoPokemon.name}</Name>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} center>
                                <Row center>
                                    <Col lg={5} md={5} sm={12} xs={12}>
                                        <SubTitle style={{ textAlign: "center" }}>Type</SubTitle>
                                        <Text style={{ textAlign: "center" }}>
                                            {infoPokemon.types.map((item) => (
                                                <li> {item.type.name},</li>
                                            ))}
                                        </Text>
                                    </Col>
                                    <Col lg={5} md={5} sm={12} xs={12} space>
                                        <SubTitle style={{ textAlign: "center" }}>Abilities</SubTitle>
                                        <Text style={{ textAlign: "center" }}>
                                            {infoPokemon.abilities.map((item) => (
                                                <li> {item.ability.name},</li>
                                            ))}
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row center>
                            <Image src={infoPokemon.sprites.back_shiny_female} alt="back_shiny_female" />
                            <Image src={infoPokemon.sprites.front_female} alt="front_female" />
                            <Image src={infoPokemon.sprites.back_default} alt="back_default" />
                            <Image src={infoPokemon.sprites.front_shiny_female} alt="front_shiny_female" />
                            <Image src={infoPokemon.sprites.back_female} alt="back_female" />
                            <Image src={infoPokemon.sprites.front_shiny} alt="front_shiny" />
                            <Image src={infoPokemon.sprites.back_shiny} alt="back_shiny" />
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PokemonDetails;
