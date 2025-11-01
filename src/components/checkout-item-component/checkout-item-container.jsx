import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import CheckoutItem from "./checkout.component";

const GET_CART_ITEM = gql`
    mutation AddCartItem($item: Item!) {
     addCartItem(item: $item) @client
    }
`
const GET_REMOVE_CART_ITEM = gql`
    mutation RemoveCartItem($item: Item!) {
     removeCartItem(item: $item) @client
    }
`
const GET_CLEAR_CART_ITEM = gql`
    mutation ClearCartItem($item: Item!) {
    clearCartItem(item: $item) @client
    }
`
const CheckoutItemContainer = (props) => {
    return(
        <Mutation mutation={GET_CART_ITEM}>
            {
                 addCartItem => (
                    <Mutation mutation={GET_REMOVE_CART_ITEM}>
                        {
                           removeCartItem => (
                            <Mutation mutation={GET_CLEAR_CART_ITEM}>
                                {
                                    clearCartItem => <CheckoutItem {...props} 
                            addItem={(item) => addCartItem({variables: {item}})}
                             removeItem={(item) => removeCartItem({variables: {item}})}
                             clearItem={(item) => clearCartItem({variables: {item}})}
                             />
                                }
                            </Mutation>
                           )
                        }
                    </Mutation>
                )
            }
        </Mutation>
    )
}

export default CheckoutItemContainer;