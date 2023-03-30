import React from "react";

import useCategory from "../useCategory";

import DataGrid, {
  Column,
  Editing,
  Lookup,
  SearchPanel,
} from "devextreme-react/data-grid";

import Loading from "../../Loading";

import { RowUpdatingEvent, RowRemovingEvent } from "devextreme/ui/data_grid";

import useAuthor from "../useAuthor";

function AuthorsListing() {
  const {
    isFetching,
    authors,
    updateAuthorData,
    isUpdateAuthorDataLoading,
    deleteAuthorData,
    isDeleteAuthorDataLoading,
  } = useAuthor();

  const onRowUpdating = (e: RowUpdatingEvent) => {
    const { key: id } = e;

    const putContent = e.oldData;

    updateAuthorData({ id, data: putContent });
  };

  const onRowRemoving = (e: RowRemovingEvent) => {
    const { key: id } = e;

    deleteAuthorData(id);
  };

  if (isFetching || isUpdateAuthorDataLoading || isDeleteAuthorDataLoading)
    return <Loading />;

  return (
    <>
      <DataGrid
        dataSource={authors}
        keyExpr="id"
        showBorders={true}
        className="ml-10 mr-10"
        onRowUpdating={onRowUpdating}
        onRowRemoving={onRowRemoving}
      >
        <Editing
          mode="row"
          allowAdding={false}
          allowDeleting={true}
          allowUpdating={true}
        />

        <SearchPanel visible={true} />
        <Column dataField="name" caption="Author" />

        <Column
          dataField="creationDate"
          caption="Creation date"
          allowEditing={false}
        />
      </DataGrid>
    </>
  );
}

export default AuthorsListing;
