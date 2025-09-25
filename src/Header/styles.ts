import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;
    background: ${(props) => props.theme.colors["base-background"]};
`

export const LocationTag = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: ${(props) => props.theme.colors['brand-purple-light']};
    color: ${(props) => props.theme.colors['brand-purple-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.regular};
`
export const LocationSection = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const CartIconContainer = styled.div`
    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    display: flex;  
    justify-content: center;
    position: relative;
`;

export const CartBadge = styled.span`
	position: absolute;
	top: -8px;
	right: -8px;
	background: ${(props) => props.theme.colors['brand-yellow-dark']};
	color: ${(props) => props.theme.colors['base-white']};
	border-radius: 50%;
	min-width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 6px;
	z-index: 1;
`;


