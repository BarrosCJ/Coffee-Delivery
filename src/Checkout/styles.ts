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
    padding: 2rem;
`;

export const CompletePayment = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;


`;

export const Complete = styled.h1`
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    width: 100%;

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
    width: 100%;
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
    background-color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2rem;
    width: 38%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CoffeeTitle = styled.h2`
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const ReviewOrder = styled.div`
    background-color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`;
