import {MapPin, ShoppingCart} from 'phosphor-react'
import logo from '/src/assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { CartIconContainer, HeaderContainer, LocationSection, LocationTag } from './styles'

export function Header() {
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
              <ShoppingCart color='#C47F17' size={22} weight="fill" />
            </NavLink>
         </CartIconContainer>

        </LocationSection>
    </HeaderContainer>
  )
}
