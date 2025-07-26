import styled from "styled-components";

interface InputProps {
    width?: string;
}

export const Complete = styled.h1`
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10rem;
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
    width:40%;
    margin-left: 10rem;
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
    width:40%;
    margin-left: 10rem;
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