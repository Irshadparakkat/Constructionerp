import React from 'react';

import CrudModule from '@/modules/CrudModule';
import MaterialForm from '@/forms/MaterialForm';
export default function Model() {
  const entity = 'Material';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'materialName,displayName',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Material Panel';
  const dataTableTitle = 'Material Lists';
  const entityDisplayLabels = ['displayName'];

  const readColumns = [
    { title: 'materialName', dataIndex: 'materialName' },
    { title: 'unit', dataIndex: 'unit' },
    { title: 'price/unit', dataIndex: 'unitprice' },
  ];

  const dataTableColumns = [
    { title: 'materialName', dataIndex: 'materialName' },
    { title: 'unit', dataIndex: 'unit' },
    { title: 'price/unit', dataIndex: 'unitprice' },
  ];
  const ADD_NEW_ENTITY = 'Add new Material';
  const DATATABLE_TITLE = 'Material List';
  const ENTITY_NAME = 'Material';
  const CREATE_ENTITY = 'Create Material';
  const UPDATE_ENTITY = 'Update Material';
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
      createForm={<MaterialForm />}
      updateForm={<MaterialForm isUpdateForm={true} />}
      config={config}
    />
  );
}
