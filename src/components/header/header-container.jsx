import { Query } from "react-apollo";
import gql from "graphql-tag";
import Header from "./header.component";

const GET_CART_HIDDEN = gql`
    { 
    cartHidden @client
   }
`
const HeaderContainer = () => {
    return(
        <Query query={GET_CART_HIDDEN}>
            {
                ({data}) => {
                    const {cartHidden} = data;
                    console.log(cartHidden)
                    return <Header hidden={cartHidden}/>
                }
            }
        </Query>
    )
}

export default HeaderContainer;