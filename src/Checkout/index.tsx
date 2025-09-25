import type { Address } from "../store";
import { ButtonContainer, ChoosePayment, CoffeeContainer, CoffeeItem, CoffeeSection, CoffeeTitle, Complete,  
  CompletePayment,  
  Delivery,  
  Dollar, FirstField, Input, 
  Input1, Input2, InputsAddress, 
  ItensTotal, 
  OrderSummary, 
  Payment, QuantityButton, RemoveButton, 
  ReviewOrder, SecondField, SectionButtons, 
  SectionCheck, Subtitle, TitleM, TitleS, 
  Total, Address as AddressContainer } from "./styles";
import { MapPin, CurrencyDollar, CreditCard, Money, Bank, Trash} from 'phosphor-react';
import useCartStore from "../store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



export function Checkout() {
  const { items, removeItem, updateQuantity, getTotalPrice, paymentMethod, setPaymentMethod, setAddress } = useCartStore();
  const deliveryFee = 3.50;
  const itemsArray = Object.values(items);
  const totalItems = getTotalPrice();
  const totalWithDelivery = totalItems + deliveryFee;
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<Address>();
  const watchedFields = watch();

  const onSubmit = (data: Address) => {
    setAddress(data);
    navigate('/success');
  };

  const handleIncrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const isFormValid = () => {
    const requiredFields: (keyof Address)[] = ['zipCode', 'street', 'streetNumber', 'neighborhood', 'city', 'state'];
    const isAddressValid = requiredFields.every(field =>
      watchedFields[field]?.trim() !== '' &&
      watchedFields[field] !== undefined
    );
    const hasItems = itemsArray.length > 0;
    const hasPaymentMethod = paymentMethod !== null;
    return isAddressValid && hasItems && hasPaymentMethod;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SectionCheck>
        <CompletePayment>
          <Complete>Complete seu pedido</Complete>
          <FirstField>
            <AddressContainer>
              <TitleM>
                <MapPin color='#C47F17' size={15} />
                <span>Endereço de entrega</span>
              </TitleM>
              <TitleS>Informe o endereço onde deseja receber seu pedido</TitleS>
            </AddressContainer>
            <InputsAddress>
                <Input placeholder="CEP" {...register("zipCode")} width="35%"/>
                <Input  placeholder="Rua" {...register("street")} />
              <Input1>
                <Input placeholder="Número" {...register("streetNumber")} width="35%" />
                <Input  placeholder="Complemento" {...register("complement")} width="65%" />
              </Input1>
              <Input2>
                <Input  placeholder="Bairro" {...register("neighborhood")} width="35%" />
                <Input  placeholder="Cidade" {...register("city")} width="50%" />
                <Input  placeholder="UF" {...register("state")} width="12%" />
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
              <button type="button" onClick={() => setPaymentMethod('credit')}><CreditCard color='#8047F8' size={20}/>Cartão de crédito</button>
              <button type="button" onClick={() => setPaymentMethod('debit')}><Bank color='#8047F8' size={20}/>Cartão de débito</button>
              <button type="button" onClick={() => setPaymentMethod('cash')}><Money color='#8047F8' size={20}/>Dinheiro</button>
            </SectionButtons>
          </SecondField>
        </CompletePayment>
        <CoffeeSection>
          <Subtitle>Cafés selecionados</Subtitle>
          <ReviewOrder>
            {itemsArray.length === 0 ? (
              <div>Nenhum café selecionado</div>
            ) : (
              itemsArray.map((item) => (
                <CoffeeContainer key={item.coffee.id}>
                  <img src={item.coffee.image} alt={item.coffee.name} />
                  <CoffeeItem>
                    <CoffeeTitle>{item.coffee.name}</CoffeeTitle>
                    <ButtonContainer>
                      <QuantityButton>
                        <button type="button" onClick={() => handleDecrement(item.coffee.id, item.quantity)}>-</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => handleIncrement(item.coffee.id, item.quantity)}>+</button>
                      </QuantityButton>
                      <RemoveButton type="button" onClick={() => removeItem(item.coffee.id)}>
                        <Trash color='#8047F8' size={20} />
                        Remover
                      </RemoveButton>
                    </ButtonContainer>
                  </CoffeeItem>
                  <div>R$ {(item.coffee.price * item.quantity).toFixed(2)}</div>
                </CoffeeContainer>
              ))
            )}
            <OrderSummary>
              <ItensTotal>
                <span>Total de itens</span>
                <span>R$ {totalItems.toFixed(2)}</span>
              </ItensTotal>
              <Delivery>
                <span>Entrega</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </Delivery>
              <Total>
                <span>Total</span>
                <span>R$ {totalWithDelivery.toFixed(2)}</span>
              </Total>
              <button
                type="submit"
                disabled={!isFormValid()}
              >
                Confirmar Pedido
              </button>
            </OrderSummary>
          </ReviewOrder>
        </CoffeeSection>
      </SectionCheck>
    </form>
  );
}
