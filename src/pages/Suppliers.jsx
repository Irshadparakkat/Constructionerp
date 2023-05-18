import React from 'react';

import CrudModule from '@/modules/CrudModule';
import SuppliersForm from '@/forms/SuppliersForm';
export default function Suppliers() {
  const entity = 'Supplier';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'supplierName,displayName',
    outputValue: '_id',
  };
  const PANEL_TITLE = 'Supplier Panel';
  const dataTableTitle = 'Supplier Lists';
  const entityDisplayLabels = ['displayName'];

  const readColumns = [
    { title: 'accountCode', dataIndex: 'accountCode' },
    { title: 'name', dataIndex: 'name' },
    { title: 'Materials', dataIndex: 'materials' },
  ];

  const dataTableColumns = [
    { title: 'accountCode', dataIndex: 'accountCode' },
    { title: 'name', dataIndex: 'name' },
    { title: 'Materials', dataIndex: 'materials' },
  ];
  const ADD_NEW_ENTITY = 'Add new supplier';
  const DATATABLE_TITLE = 'Supplier List';
  const ENTITY_NAME = 'Supplier';
  const CREATE_ENTITY = 'Create Supplier';
  const UPDATE_ENTITY = 'Update Supplier';
  const config = {
    entity,
    PANEL_TITLE,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<SuppliersForm />}
      updateForm={<SuppliersForm isUpdateForm={true} />}
      config={config}
    />
  );
}
