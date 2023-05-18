import React from 'react';

import CrudModule from '@/modules/CrudModule';
import WorkCategoryFrom from '@/forms/WorkCategoryForm';
export default function WorkCategory() {
  const entity = 'Work Category';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'codeName,displayName',
    outputValue: '_id',
  };
  const PANEL_TITLE = 'Work Category';
  const dataTableTitle = 'Work Lists';
  const entityDisplayLabels = ['displayName'];

  const readColumns = [
    { title: 'workName', dataIndex: 'workName' },
    { title: 'description', dataIndex: 'description' },
  ];

  const dataTableColumns = [
    { title: 'workName', dataIndex: 'workName' },
    { title: 'description', dataIndex: 'description' },
  ];
  const ADD_NEW_ENTITY = 'Add new Work Category';
  const DATATABLE_TITLE = 'Work Name';
  const ENTITY_NAME = 'Work';
  const CREATE_ENTITY = 'Create work';
  const UPDATE_ENTITY = 'Update work';
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
      createForm={<WorkCategoryFrom />}
      updateForm={<WorkCategoryFrom isUpdateForm={true} />}
      config={config}
    />
  );
}
