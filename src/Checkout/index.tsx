import { Address, Complete, FirstField, 
  Input, Input1, Input2, InputsAddress, SecondField, 
  TitleM, TitleS } from "./styles";
import { MapPin, CurrencyDollar } from 'phosphor-react';

export function Checkout() {
  return (
    <div>
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
        <TitleM>
          <CurrencyDollar color='#8047F8' size={15} />
          <span>Pagamento</span>
          <TitleS>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TitleS>
        </TitleM>
        
        <div>
          <button type="button">Cartão de crédito</button>
          <button type="button">Cartão de débito</button>
          <button type="button">Dinheiro</button>
        </div>
      </SecondField>

        <div>
          <TitleM>Cafés selecionados</TitleM>
          <span>Revise seus itens de pedido</span>
          {/* Aqui você pode mapear os cafés selecionados */}
        </div>
    </div>
  )
}