import { Address, ChoosePayment, CoffeeSection, CoffeeTitle, Complete,  
  CompletePayment,  
  Dollar, FirstField, Input, 
  Input1, Input2, InputsAddress, 
  Payment, ReviewOrder, SecondField, SectionButtons, 
  SectionCheck, TitleM, TitleS } from "./styles";
import { MapPin, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';


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
              <Input type="text" placeholder="CEP" width="30%"/>
              <Input type="text" placeholder="Rua"/>

            <Input1>
              <Input type="number" placeholder="Número" width="30%" />
              <Input type="text" placeholder="Complemento" width="70%" />
            </Input1>

            <Input2>
              <Input type="text" placeholder="Bairro" width="30%" />
              <Input type="text" placeholder="Cidade" width="60%" />
              <Input type="text" placeholder="UF" width="10%" />
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
        <CoffeeTitle>Cafés selecionados</CoffeeTitle>
        <ReviewOrder>
          <span>Revise seus itens de pedido</span>
          {/* Aqui você pode mapear os cafés selecionados */}
        </ReviewOrder>
      </CoffeeSection>

    </SectionCheck>
  )
}