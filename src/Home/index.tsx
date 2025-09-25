import imagem from '../assets/Imagem.svg'
import carrinho from '../assets/carrinho.svg'
import timer from '../assets/timer.svg'
import box from '../assets/box.svg'
import coffee from '../assets/coffee.svg'
import expressoA from '../assets/Coffees/expressoA.svg'
import expressoC from '../assets/Coffees/expressoC.svg'
import expressoT from '../assets/Coffees/expressoT.svg'
import arabe from '../assets/Coffees/arabe.svg'
import expressoG from '../assets/Coffees/expressoG.svg'
import cafeL from '../assets/Coffees/cafeL.svg'
import cappuccino from '../assets/Coffees/cappuccino.svg'
import chocolateQ from '../assets/Coffees/chocolateQ.svg'
import latte from '../assets/Coffees/latte.svg'
import macchiato from '../assets/Coffees/macchiato.svg'
import mocaccino from '../assets/Coffees/mocaccino.svg'
import cubano from '../assets/Coffees/cubano.svg'
import havaiano from '../assets/Coffees/havaiano.svg'
import irlandes from '../assets/Coffees/irlandes.svg'
import {
  AdvantageText, AdvantageItem, AdvantagesList,
  Banner, CartIcon, CoffeeCard,
  CoffeeCart, CoffeeDetails, CoffeeImage,
  CoffeePrice, CoffeeQuantity, CoffeesList,
  Header, QuantitySelector, RegularS,Subtitle, Title, TitleL, TitleS, 
  CoffeeTag,
  HomeBody,
  TagsCoffee} from './styles'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import useCartStore from '../store'

const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.90,
    image: expressoT,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: 9.90,
    image: expressoA,
  },
  {
    id:3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: 9.90,
    image: expressoC,
  },
  {
  id: 4,
  name: 'Expresso Gelado',
  description: 'Bebida preparada com café expresso e cubos de gelo',
  tags: ['Tradicional', 'Gelado'],
  price: 9.90,
  image: expressoG,
  },
  {
  id: 5,
  name: 'Café com Leite',
  description: 'A tradicional bebida feita com água quente e grãos moídos, complementada com leite',
  tags: ['Tradicional', 'Com Leite'],
  price: 9.90,
  image: cafeL,
  },
  {
  id: 6,
  name: 'Latte',
  description: 'Uma bebida suave feita com café expresso e leite vaporizado',
  tags: ['Tradicional', 'Com Leite'],
  price: 9.90,
  image: latte,
  },
  {
  id: 7,
  name: 'Cappuccino',
  description: 'Uma mistura equilibrada de café expresso, leite vaporizado e espuma de leite',
  tags: ['Tradicional', 'Com Leite'],
  price: 9.90,
  image: cappuccino,
  },
  {
  id: 8,
  name: 'Macchiato',
  description: 'Café expresso com uma pequena quantidade de espuma de leite',
  tags: ['Tradicional', 'Com Leite'],
  price: 9.90,
  image: macchiato, 
  },
  {
  id: 9,
  name: 'Mocaccino',
  description: 'Café expresso com chocolate, leite vaporizado e espuma de leite',
  tags: ['Tradicional', 'Com Leite'],
  price: 9.90,
  image: mocaccino,
  },
  {
  id: 10,
  name: 'Chocolate Quente',
  description: 'Uma bebida reconfortante feita com chocolate quente e leite vaporizado',
  tags: ['Especial', 'Com leite'],
  price: 9.90,
  image: chocolateQ,
  },
  {
  id: 11,
  name: 'Cubano',
  description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  tags: ['Especial', 'Alcoólico', 'Gelado'],
  price: 9.90,
  image: cubano,
  },
  {
  id: 12,
  name: 'Havaiano',
  description: 'Bebida adocicada preparada com café expresso e leite de coco',
  tags: ['Especial'],
  price: 9.90,
  image: havaiano,
  },
  {
  id: 13,
  name: 'Árabe',
  description: 'Bebida preparada com grãos de café árabe, especiarias',
  tags: ['Especial'],
  price: 9.90,
  image: arabe,
  },
  {
  id: 14,
  name: 'Irlandês',
  description: 'Bebida a base de café, whisky irlandês, açúcar e chantilly',
  tags: ['Tradicional', 'Alcoólico'],
  price: 9.90,
  image: irlandes,
  },
]

export function Home() {
  const { addItem } = useCartStore()

  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const getQuantity = (coffeeId: number) => {
    return quantities[coffeeId] || 1;
  };

  const incrementQuantity = (coffeeId: number) => {
    setQuantities(prev => ({
      ...prev,
      [coffeeId]: (prev[coffeeId] || 1) + 1
    }));
  };

  const decrementQuantity = (coffeeId: number) => {
    setQuantities(prev => ({
      ...prev,
      [coffeeId]: Math.max((prev[coffeeId] || 1) - 1, 1)
    }));
  }

  return (
    <>
    <HomeBody>
    <Banner>
      <div style={{width: '50%'}}>
        <Header>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
        </Header>
        <AdvantagesList>
          <AdvantageItem>
            <img src={carrinho} alt="Carrinho de compras" />
            <AdvantageText>Compra simples e segura</AdvantageText>
          </AdvantageItem>

          <AdvantageItem>
            <img src={timer} alt="Cronometro" />
            <AdvantageText>Entrega rápida e rastreada</AdvantageText>
          </AdvantageItem>

          <AdvantageItem>
            <img src={box} alt="Embalagem" />
            <AdvantageText>Embalagem mantém o café intacto</AdvantageText>
          </AdvantageItem>

          <AdvantageItem>
            <img src={coffee} alt="Xícara de café" />
            <AdvantageText>O café chega fresquinho até você</AdvantageText>
          </AdvantageItem>

        </AdvantagesList>
      </div>

      <div style={{width: '50%'}}>  
        <img src={imagem} alt="Copo de café" />
      </div>
  
    </Banner>

      <TitleL>Nossos cafés</TitleL>
      <CoffeesList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <CoffeeImage>
              <img src={coffee.image} alt={coffee.name} />
            </CoffeeImage>
          <TagsCoffee>
              {coffee.tags.map(tag => (
              <CoffeeTag key={tag}>{tag}</CoffeeTag>
            ))}
          </TagsCoffee>
        <CoffeeDetails>
          <TitleS>{coffee.name}</TitleS>
          <RegularS>{coffee.description}</RegularS>
        </CoffeeDetails>
        <CoffeeCart>
          <CoffeePrice>
            <p>R$</p>
            <span>{coffee.price.toFixed(2)}</span>
          </CoffeePrice>
          <CoffeeQuantity>
            <QuantitySelector>
              <button onClick={() => decrementQuantity(coffee.id)}>-</button>
              <span>{getQuantity(coffee.id)}</span>
              <button onClick={() => incrementQuantity(coffee.id)}>+</button>
            </QuantitySelector>
            <CartIcon>
              <button
                style={{ border: 'none' }}
                onClick={() => addItem(coffee, getQuantity(coffee.id))}
              >
                <ShoppingCart color='white' size={22} weight="fill" />
              </button>
            </CartIcon>
          </CoffeeQuantity>
        </CoffeeCart>
      </CoffeeCard>
        ))}
      </CoffeesList>
    </HomeBody>
    </>
  )
}
