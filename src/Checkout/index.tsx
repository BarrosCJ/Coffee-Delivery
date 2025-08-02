import { Address, ButtonContainer, ChoosePayment, CoffeeContainer, CoffeeItem, CoffeeSection, CoffeeTitle, Complete,  
  CompletePayment,  
  Delivery,  
  Dollar, FirstField, Input, 
  Input1, Input2, InputsAddress, 
  ItensTotal, 
  OrderSummary, 
  Payment, QuantityButton, RemoveButton, 
  ReviewOrder, SecondField, SectionButtons, 
  SectionCheck, Subtitle, TitleM, TitleS, 
  Total} from "./styles";
import { MapPin, CurrencyDollar, CreditCard, Money, Bank, Trash} from 'phosphor-react';

import arabe from '../assets/Coffees/arabe.svg';



export function Checkout() {
  return (
    <SectionCheck>
      <CompletePayment>
        <Complete>Complete seu pedido</Complete>
        <FirstField>

          <Address>
            <TitleM>
              <MapPin color='#C47F17' size={15} />
              <span>Endereço de entrega</span>
            </TitleM>
            <TitleS>Informe o endereço onde deseja receber seu pedido</TitleS>
          </Address>

          <InputsAddress>
              <Input type="text" placeholder="CEP" width="35%"/>
              <Input type="text" placeholder="Rua"/>

            <Input1>
              <Input type="number" placeholder="Número" width="35%" />
              <Input type="text" placeholder="Complemento" width="65%" />
            </Input1>

            <Input2>
              <Input type="text" placeholder="Bairro" width="35%" />
              <Input type="text" placeholder="Cidade" width="50%" />
              <Input type="text" placeholder="UF" width="12%" />
            </Input2>
          </InputsAddress>

        </FirstField>

        <SecondField>
          <Payment>
            <Dollar>
              <CurrencyDollar color='#8047F8' size={20} />
              <span>Pagamento.</span>
            </Dollar>
            <ChoosePayment>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </ChoosePayment>
          </Payment>
          
          <SectionButtons>
            <button><CreditCard color='#8047F8' size={20} />Cartão de crédito</button>
            <button><Bank color='#8047F8' size={20} />Cartão de débito</button>
            <button><Money color='#8047F8' size={20} />Dinheiro</button>
          </SectionButtons>
        </SecondField>
      </CompletePayment>

      <CoffeeSection>
        <Subtitle>Cafés selecionados</Subtitle>

        <ReviewOrder>
          <CoffeeContainer>
            <img src={arabe} alt="Café Arabe" />
           <CoffeeItem>
             <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
              <ButtonContainer>
                <QuantityButton>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </QuantityButton>
                <RemoveButton>
                  <Trash color='#8047F8' size={20} />
                  Remover
                </RemoveButton>
              </ButtonContainer>
           </CoffeeItem>
          <div>R$: 9,90</div>
          </CoffeeContainer>

          <OrderSummary>
            <ItensTotal>
              <span>Total de itens</span>
              <span>R$ 9,90</span>
            </ItensTotal>
            <Delivery>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </Delivery>
            <Total>
              <span>Total</span>
              <span>R$ 13,40</span>
            </Total>
            <button>Confirmar Pedido</button>
          </OrderSummary>
        </ReviewOrder>
      </CoffeeSection>

    </SectionCheck>
  )
}