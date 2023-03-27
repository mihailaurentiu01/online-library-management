import React from "react";

import DataGrid, { Column, Sorting } from "devextreme-react/data-grid";
import useCategory from "../useCategory";
import Loading from "../../Loading";

function CategoriesListing() {
  const { isFetching, categories } = useCategory();

  if (isFetching) return <Loading />;

  return (
    <>
      <DataGrid dataSource={categories} keyExpr="id" showBorders={true}>
        <Column dataField="name" caption="Category" />
        <Column dataField="status" caption="Status" />
        <Column dataField="creationDate" caption="Creation date" />
        <Column dataField="" caption="Action" />
      </DataGrid>
    </>
  );
}

export default CategoriesListing;
