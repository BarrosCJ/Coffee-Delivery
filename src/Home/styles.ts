import styled from "styled-components";


export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.75rem 10rem;
  background: ${(props) => props.theme.colors["base-background"]};
`;
export const HomeBody = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 36rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors["base-title"]};
  font-family: ${(props) => props.theme.fonts.title};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors["base-text"]};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const AdvantagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 1.25rem;
  padding: 0;
`;

export const AdvantageItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  flex: 1 1 45%;

`;

export const AdvantageText = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;
  color: ${(props) => props.theme.colors["base-text"]};
`;

export const TitleL = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors["base-title"]};
  font-family: ${(props) => props.theme.fonts.title};
  padding: 0.375rem 10rem;
`;  

export const CoffeesList = styled.section`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  padding: 0.375rem 10rem;
  gap: 2rem;
`;

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px; 
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 16rem;
  margin: 1rem;
`;

export const CoffeeImage = styled.div`
  width: 7.5rem;
  margin-top: -3rem;

`;

export const CoffeeTag = styled.div `
  background: ${(props) => props.theme.colors["brand-yellow-light"]};
  color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 800;
  font-size: 0.625rem;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  margin-top: 0.5rem;

`;
export const TagsCoffee = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

export const TitleS = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-family: ${(props) => props.theme.fonts.title};
  margin-bottom: 0.5rem;
`;

export const RegularS = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors["base-label"]};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const CoffeeDetails = styled.div``;

export const CoffeeCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors["base-text"]};
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 800;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors["base-text"]};
    font-family: ${(props) => props.theme.fonts.regular};
    }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors["base-button"]};
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors["brand-purple"]};
    font-size: 1.5rem;
  }
`;
export const CoffeeQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartIcon = styled.div`
  background-color: ${(props) => props.theme.colors["brand-purple-dark"]};
  color: ${(props) => props.theme.colors["base-white"]};
  border-radius: 6px;
  padding: 0.5rem;

   button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 3px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1); // Efeito hover sutil (opcional)
    }
  }

`;


