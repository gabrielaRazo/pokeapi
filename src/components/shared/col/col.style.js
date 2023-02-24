import styled from "styled-components";

function getWidthStrings(span) {
    if (!span) {
        return;
    }
    let flex = (span / 12) * 100;
    return `display: block; flex: ${flex}%; max-width: ${flex}%;`;
}

const media = {
    xs: (styles) => `
    @media only screen and (max-width:480px){
        ${styles}
    }
    `,
    md: (styles) => `
    @media (min-width: 768px) and (max-width: 1023px){
        ${styles}
    }
    `,
    sm: (styles) => `
    @media (min-width: 481px) and (max-width: 760px){
        ${styles}
    }
    `,
    lg: (styles) => `
@media (min-width: 1024px) and (max-width: 2570px) {
        ${styles}
    }
    `,
};

export const ColContainer = styled.div`
    padding: 8px 0;
    ${({ space }) => space && `padding-left: 0.5em; padding-right: 0.5em`};

    @media (max-width: 420px) {
        ${({ xs }) => (xs ? getWidthStrings(xs) : "width: 100%")};
    }
    @media (min-width: 420px) and (max-width: 760px) {
        ${({ sm }) => sm && getWidthStrings(sm)};
    }
    @media (min-width: 761px) and (max-width: 1023px) {
        ${({ md }) => md && getWidthStrings(md)};
    }
    @media (min-width: 1024px) and (max-width: 2570px) {
        ${({ lg }) => lg && getWidthStrings(lg)};
    }
    ${(props) => props.collapse && media[props.collapse](`display:none;`)};
    ${(props) => props.hidden && media[props.hidden](`display:none;`)};
    ${(props) => props.none && media[props.none](`display:none;`)};
    ${({ center }) => center && ` text-align: center; `};
    ${({ space }) => space && `padding-left: 8px; padding-right: 8px;`}
`;
