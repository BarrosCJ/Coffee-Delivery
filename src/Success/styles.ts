import styled from "styled-components"


export const Título = styled.div`
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
  h1 {
    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }

  p {
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 2.5rem;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors["brand-purple"]};
  border-radius: 6px 36px 6px 36px;
  flex: 1 1 45%;
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors["base-text"]};
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
`;
export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors["base-text"]};

`;

export const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors["base-text"]};

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  padding: 0 10rem;
`;

