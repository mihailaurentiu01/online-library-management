import React from "react";

import useCategory from "../useCategory";

import DataGrid, { Column, Editing, Lookup } from "devextreme-react/data-grid";

import Loading from "../../Loading";

import { CellPreparedEvent } from "devextreme/ui/data_grid";
import { RowUpdatingEvent } from "devextreme/ui/data_grid";

import Category from "../../../models/Category";
import { availableStatuses } from "../../../js/common";

function CategoriesListing() {
  const { isFetching, categories } = useCategory();

  if (isFetching) return <Loading />;

  const onCellPrepared = (e: CellPreparedEvent<Category, any>) => {
    if (e.rowType === "data") {
      if (e.column.dataField === "status") {
        if (e.row.data.status === "Active") {
          e.cellElement.classList.add(
            "bg-green-100",
            "text-green-800",
            "text-xs",
            "font-medium",
            "rounded",
            "px-2.5",
            "dar:bg-green-900",
            "dark-text-green-300"
          );
        } else if (e.row.data.status === "Inactive") {
          e.cellElement.classList.add(
            "bg-red-100",
            "text-red-800",
            "text-xs",
            "font-medium",
            "rounded",
            "px-2.5",
            "dar:bg-red-900",
            "dark-text-red-300"
          );
        }
      }
    }
    return e;
  };

  const onRowUpdating = (e: RowUpdatingEvent) => {
    const { key: id } = e;

    const putContent = e.oldData;

    // Perform update
  };

  return (
    <>
      <DataGrid
        dataSource={categories}
        keyExpr="id"
        showBorders={true}
        className="ml-10"
        onCellPrepared={onCellPrepared}
        onRowUpdating={onRowUpdating}
      >
        <Editing
          mode="row"
          allowAdding={false}
          allowDeleting={true}
          allowUpdating={true}
        />
        <Column dataField="name" caption="Category" />
        <Column dataField="status" caption="Status">
          <Lookup dataSource={availableStatuses} />
        </Column>
        <Column
          dataField="creationDate"
          caption="Creation date"
          allowEditing={false}
        />
      </DataGrid>
    </>
  );
}

export default CategoriesListing;
