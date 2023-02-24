import { PaginationContainer, Button } from "./pagination.style";

import { Icon } from "@iconify/react";

const Pagination = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
    return (
        <PaginationContainer>
            <Button disabled={currentPage === 1} onClick={onPreviousPage}>
                <Icon icon="ooui:arrow-previous-ltr" />
            </Button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <Button disabled={currentPage === totalPages} onClick={onNextPage}>
                <Icon icon="grommet-icons:link-next" />
            </Button>
        </PaginationContainer>
    );
};

export default Pagination;
