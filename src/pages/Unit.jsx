import React from 'react';

import CrudModule from '@/modules/CrudModule';
import UnitForm from '@/forms/UnitForm';
export default function Unit() {
  const entity = 'unit';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'unitName,displayName',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Unit Panel';
  const dataTableTitle = 'Unit Lists';
  const entityDisplayLabels = ['displayName'];

  const readColumns = [
    { title: 'unitName', dataIndex: 'unitName' },
    { title: 'Symbol', dataIndex: 'symbolName' },
    { title: 'Type', dataIndex: 'type' },
  ];

  const dataTableColumns = [
    { title: 'unitName', dataIndex: 'unitName' },
    { title: 'Symbol', dataIndex: 'symbolName' },
    { title: 'Type', dataIndex: 'type' },
  ];
  const ADD_NEW_ENTITY = 'Add new Unit';
  const DATATABLE_TITLE = 'unit List';
  const ENTITY_NAME = 'Unit';
  const CREATE_ENTITY = 'Create Unit';
  const UPDATE_ENTITY = 'Update Unit';

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
      createForm={<UnitForm />}
      updateForm={<UnitForm isUpdateForm={true} />}
      config={config}
    />
  );
}
