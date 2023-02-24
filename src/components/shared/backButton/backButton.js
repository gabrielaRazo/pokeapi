import React from "react";
import Col from "../col/col";
import IconWrap from "../iconWrap/iconWrap";
import Tooltip from "../tooltip/tooltip";
import { Icon } from "@iconify/react";

const BackButton = ({ onClick }) => {
    return (
        <Col lg={1} md={1} sm={1} xs={1} space>
            <Tooltip text="Return to previous page">
                <IconWrap color={"#bfbfbf"} width={"30px"} height={"30px"} clickable>
                    <Icon icon="mdi:arrow-back-circle" onClick={onClick} />
                </IconWrap>
            </Tooltip>
        </Col>
    );
};

export default BackButton;
