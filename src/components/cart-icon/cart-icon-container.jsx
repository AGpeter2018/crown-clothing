import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`

const GET_ITEM_COUNT = gql`
    {
       cartItemCount @client
}
`

const CartIconContainer = () => {
    return(
        <Query query={GET_ITEM_COUNT}>
            {
                ({data}) =>  {
                    const {cartItemCount} = data
                    console.log(cartItemCount)
                    return  <Mutation mutation={TOGGLE_CART_HIDDEN}>
            {
                toggleCartHidden => {
                    return(
                    <CartIcon toggleCartHidden={toggleCartHidden} cartItemCount={cartItemCount}/>
                )
            }
            }
        </Mutation>
                }
            }
        </Query>
    )
}

export default CartIconContainer;