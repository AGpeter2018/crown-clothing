import { Query } from "react-apollo";
import gql from "graphql-tag";
import Checkout from "./checkout.page";

const ADD_CART_TO_CHECKOUT = gql`
   {
     cartItems @client
        cartTotal @client
   } 
`


const CheckoutPageContainer = () => {
    return(
        <Query query={ADD_CART_TO_CHECKOUT}>
            {
                ({data}) => {
                    const {cartItems, cartTotal} = data
                    return(
                        <Checkout cartItems={cartItems} cartTotal={cartTotal}/>
                    )
                }
            }
        </Query>
    )
}

export default CheckoutPageContainer;