import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import CollectionPageItems from "./collectionPage-items";

const ADD_ITEM_TO_CART = gql`
mutation AddcartItem($item: Item!) {
addCartItem(item: $item) @client
}`

const CollectionPageItemContainer = (props) => {
    return(
        <Mutation mutation={ADD_ITEM_TO_CART}>
            {
                addCartItem => {
                    return(
                        <CollectionPageItems {...props} addItem={(item) => addCartItem({variables: {item}})}/>
                    )
                }
            }
        </Mutation>
        )
        }

        export default CollectionPageItemContainer;