import styled from "styled-components";

interface InputProps {
    width?: string;
}

export const SectionCheck = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
    padding: 2.5rem 10rem;
    max-width: 1000px; 
    margin: 0 auto;
`;

export const CompletePayment = styled.div`
    display: flex;
    flex-direction: column;
    width: 58%;
`;

export const Complete = styled.h1`
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    margin-bottom: 1rem;
    font-family: ${(props) => props.theme.fonts.title};

`;
export const TitleM = styled.div`
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors["base-text"]};
`;
export const TitleS = styled.span`
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors["base-text"]};
    font-family: ${(props) => props.theme.fonts.regular};
`;
export const Address = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.25rem;  
`;
export const InputsAddress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FirstField = styled.div`
    margin-bottom: 2rem;
    background-color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;
`;

export const Input = styled.input<InputProps>`
    box-sizing: border-box;
    width: ${(props) => props.width || "100%"};
    padding: 0.75rem;
    font-size: 0.875rem;
    font-family: ${(props) => props.theme.fonts.regular};
    border: 1px solid ${(props) => props.theme.colors["base-button"]};
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors["base-input"]};
    color: ${(props) => props.theme.colors["base-text"]};

    &::placeholder {
        color: ${(props) => props.theme.colors["base-label"]};
    }
    gap: 0.5rem;
`;
export const Input1 = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;
`;

export const Input2 = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;
`;
export const SecondField = styled.div`
    margin-bottom: 2rem;
    background-color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;

    button {
        width: 50%;
        padding: 0.75rem;
        border: 1px solid ${(props) => props.theme.colors["base-button"]};
        border-radius: 6px;
        background-color: ${(props) => props.theme.colors["base-button"]};
        color: ${(props) => props.theme.colors["base-text"]};
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.colors["base-hover"]};
        }
    }
`;

export const Payment = styled.div`

    display: flex;
    flex-direction: column;
    gap:0.5rem;

    font-size: 0.875rem;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors["base-text"]};
`;

export const ChoosePayment = styled.span`
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors["base-text"]};
    font-family: ${(props) => props.theme.fonts.regular};
    margin-left: 1.7rem;
`;

export const Dollar = styled.div`
display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["base-text"]};
  font-weight: 500;

  span {
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.regular};
  }

`;

export const SectionButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    justify-content: space-between;
    width: 100%;

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        justify-content: center;
        border: 1px solid ${(props) => props.theme.colors["base-button"]};
        border-radius: 6px;
        background-color: ${(props) => props.theme.colors["base-button"]};
        cursor: pointer;
        color: ${(props) => props.theme.colors["base-text"]};
        flex: 1;
    }
`;

export const CoffeeSection = styled.div`
    
`;

export const Subtitle = styled.h2`
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const ReviewOrder = styled.div`
    background-color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    padding: 2rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`;
export const CoffeeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};

    img {
        width: 4rem;
        height: 4rem;
    }
`;

export const CoffeeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
`;

export const CoffeeTitle = styled.div`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 1rem;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    
    font-weight: 400;
    width: 100%;
    align-items: center;
    text-align: center;
    

`;

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: ${(props) => props.theme.colors["base-button"]};
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors["base-text"]};
    cursor: pointer;
    text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
`;


export const QuantityButton = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${(props) => props.theme.colors["base-button"]};
    border-radius: 6px;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors["base-button"]};

    button {
        border: none;
        background: none;
        color: ${(props) => props.theme.colors["brand-purple"]};
        width: 1rem;
        height: 1rem;

        cursor: pointer;
    }

    span {
        font-size: 1rem;
        font-family: ${(props) => props.theme.fonts.regular};
    }
`;

export const OrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
    padding: 1rem 0;

    span {
        font-size: 1rem;
        font-family: ${(props) => props.theme.fonts.regular};
        color: ${(props) => props.theme.colors["base-text"]};
    }

    button {
        width: 100%;
        padding: 0.75rem;
        color: ${(props) => props.theme.colors["base-white"]};
        background-color: ${(props) => props.theme.colors["brand-yellow"]};
        border: none;
        border-radius: 6px;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.colors["brand-yellow-dark"]};
        }
    }
`;
export const ItensTotal = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
        font-size: 1rem;
        font-family: ${(props) => props.theme.fonts.regular};
        color: ${(props) => props.theme.colors["base-text"]};
    }
`;
export const Delivery = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
        font-size: 1rem;
        font-family: ${(props) => props.theme.fonts.regular};
        color: ${(props) => props.theme.colors["base-text"]};
    }
`;
export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
        font-size: 1.25rem;
        font-family: ${(props) => props.theme.fonts.bold};
        color: ${(props) => props.theme.colors["base-subtitle"]};
    }
`;
