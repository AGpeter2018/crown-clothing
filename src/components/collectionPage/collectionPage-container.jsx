import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CollectionPage from "./collectionPage.component";
import Spinner from "../spinner/spinner.component";
import { useParams } from "react-router-dom";

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
        id
        title
        items{
        id
        name
        price
        imageUrl
        }
        }
    }
`

const CollectionPageContainer = () => {
    const {collectionId} = useParams()
    return( 
    <Query query={GET_COLLECTION_BY_TITLE} variables={{title: collectionId}}>
        {
            ( {loading, data, error}) => {
                console.log(loading)
                console.log(error)
                
                if(loading) 
                    return <Spinner/>
                
                const {getCollectionsByTitle} = data;
                console.log(getCollectionsByTitle)
                    return <CollectionPage  collection={getCollectionsByTitle}/>
               
            } 
        }
    </Query>
)
}

export default CollectionPageContainer