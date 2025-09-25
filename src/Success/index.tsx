
import illustration from '../assets/Illustration.svg';
import timer from '../assets/Timer.svg';
import Cifrao from '../assets/Cifrao.svg';
import LocationTag from '../assets/LocationTag.svg';
import { AddressInfo, Container, DeliveryInfo, ImageContainer, OrderInfo, PaymentInfo, Título } from './styles';
import useCartStore from '../store';

export function Success() {
  const { address, paymentMethod } = useCartStore();

  // Exemplo de fallback se não houver pedido
  if (!address || !address.street) {
    return <div>Nenhum pedido encontrado.</div>;
  }

  const paymentLabel = paymentMethod === 'credit'
    ? 'Cartão de Crédito'
    : paymentMethod === 'debit'
    ? 'Cartão de Débito'
    : paymentMethod === 'cash'
    ? 'Dinheiro'
    : '';

  return (
    <>
      <Título>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Título>
      <Container>
        <OrderInfo>
          <AddressInfo>
            <img src={LocationTag} alt="Pin de localização" />
            <p>
              Entrega em <strong>{address.street}, {address.streetNumber}</strong>
            </p>
            <p><strong>{address.neighborhood}</strong></p>
          </AddressInfo>
          <DeliveryInfo>
            <img src={timer} alt="Ícone de timer"/>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min</strong>
          </DeliveryInfo>
          <PaymentInfo>
            <img src={Cifrao} alt="Ícone de cifrão"/>
            <p>Pagamento na entrega</p>
            <strong>{paymentLabel}</strong>
          </PaymentInfo>
        </OrderInfo>
        <ImageContainer>
            <img src={illustration} alt="Homem indo fazer entrega na motocicleta" />
        </ImageContainer>
      </Container>
    </>
  );
}