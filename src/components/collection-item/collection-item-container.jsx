 import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import CollectionItem from "./collection-item.component";

const ADD_ITEM_TO_CART = gql`
 mutation AddcartItem($item: Item!) {
 addCartItem(item: $item) @client
 } 
`
const CollectionItemContainer = (props) => {
    return(
        <Mutation mutation={ADD_ITEM_TO_CART}>
             {
                 addCartItem => {
                     return(
                     <CollectionItem   {...props} addItem={(item) => addCartItem({variables: {item}})}/>
                 )
                }
             }
        </Mutation>
    )
}

export default CollectionItemContainer