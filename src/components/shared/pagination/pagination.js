import React from "react";
import { PaginationContainer, Button } from "./pagination.style";
import { Icon } from "@iconify/react";
import Tooltip from "../tooltip/tooltip";

const Pagination = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
    return (
        <PaginationContainer>
            <Tooltip text="Previews">
                <Button disabled={currentPage === 1} onClick={onPreviousPage}>
                    <Icon icon="ooui:arrow-previous-ltr" />
                </Button>
            </Tooltip>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <Tooltip text="Next">
                <Button disabled={currentPage === totalPages} onClick={onNextPage}>
                    <Icon icon="grommet-icons:link-next" />
                </Button>
            </Tooltip>
        </PaginationContainer>
    );
};

export default Pagination;
