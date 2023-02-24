import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/shared/card/card";
import Col from "../components/shared/col/col";
import Image from "../components/shared/image/image";
import Row from "../components/shared/row/row";
import { Container } from "../components/pokemonDetails/pokemonDetails.style";
import BackButton from "../components/shared/backButton/backButton";
import PokemonDetails from "../components/pokemonDetails/pokemonDetails";

const PokemonPage = () => {
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

    const onClickReturn = () => {
        navigate("/");
    };

    return (
        <Container>
            <Row center>
                <Col lg={7} md={7} sm={10} xs={10}>
                    <Card shadow>
                        <Row>
                            <BackButton onClick={onClickReturn} />
                            <Col lg={10} md={10} sm={10} xs={10}>
                                <PokemonDetails infoPokemon={infoPokemon} />
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

export default PokemonPage;
