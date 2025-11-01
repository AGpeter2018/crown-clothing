import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import CartDropDown from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`

const GET_CART_ITEMS = gql`
    {
     cartItems @client
     }
`
const CartDropDownContainer = () => {
    return(
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
            {
                toggleCartHidden => {
                    return (
                    <Query query={GET_CART_ITEMS}>
                      {
                          ({data}) => {
                            const {cartItems} = data
                            return(
                                <CartDropDown cartItems={cartItems} toggleCartHidden={toggleCartHidden}/>
                            )
                          }
                      }
                    </Query>
                )
            }
            }
        </Mutation>
    )
}

export default CartDropDownContainer;