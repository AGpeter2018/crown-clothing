import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import CollectionPreview from "./collection-preview.component";
import Spinner from "../spinner/spinner.component";

const GET_COLLECTION = gql`
    {
collections {
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
const CollectionPreviewContainer = () => (
    <Query query={GET_COLLECTION}>
       {
         ({data, loading, error}) => {
            console.log(data)
            console.log(loading)
            console.log(error)
            if(loading) return <Spinner/>
            return <CollectionPreview collections={data.collections}/>
        }
       }
    </Query>
)

export default CollectionPreviewContainer