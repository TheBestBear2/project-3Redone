import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LogoImg = styled.img`
    align-self: start;
    width: 150px;
`;

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-item: center;
    background: #000;
    padding: 1rem 3rem;
    position: relative;
    @media(max-width: 704px) {
        flex-direction: colum;
        padding: 1rem;
    }
`;

const NavLinkWrapper = styled.div`
    @media(max-width: 704px) {
        text-align: center;
        padding: 2rem 0;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    transition: 0.2s;
    color: white;
    margin-left: 2rem;
    &:last-child {
        background: #007dfc;
        padding: 0.5rem 1rem;
        border-radius: 30px;
        &:hover {
            color: white;
        }
    &.${(props) => props.activeclassname} {
            color: white;
    }
    }
    &.${(props) => props.activeclassname} {
        color: #007dfc;
    }
    &:hover {
        color: #007dfc;
    }
    @media (max-width: 704px) {
        display: block;
        margin: 2rem auto;
    }
`;

const StyledFontAwesomeIcon = styled (FontAwesomeIcon)`
    display: none;
    postion: absolute;
    right: 20px;
    top: 21px;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    @media (max-width) {
        display: block;
    }
`

export { LogoImg, 
    NavLinkWrapper, 
    NavbarWrapper, 
    StyledNavLink, 
    StyledFontAwesomeIcon };