import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '/src/assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { CartIconContainer, HeaderContainer, LocationSection, LocationTag, CartBadge } from './styles';
import useCartStore from '../store';


export function Header() {
  const items = useCartStore((state) => state.items);
  const totalItems = Object.values(items).reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Coffee Delivery Logo" />
      </NavLink>

      <LocationSection>
        <LocationTag>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationTag>

        <CartIconContainer>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart color="#C47F17" size={22} weight="fill" />
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
          </NavLink>
        </CartIconContainer>
      </LocationSection>
    </HeaderContainer>
  );
}
