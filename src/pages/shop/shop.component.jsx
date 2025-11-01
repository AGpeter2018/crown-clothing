import React from "react";
import {Routes, Route} from 'react-router-dom'
// import "./shop.styles.scss";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionPreviewContainer from "../../components/collection-preview/collection-overview.container.jsx";
import CollectionPageContainer from "../../components/collectionPage/collectionPage-container.jsx";

const ShopPage = () =>  {
  
    return (
      <div className="shop-page">
        <Routes>
          <Route index element={<CollectionPreviewContainer/>}/>
          <Route path=":collectionId" element={<CollectionPageContainer/>}/>
        </Routes>
      </div>
    );
}

export default ShopPage;
