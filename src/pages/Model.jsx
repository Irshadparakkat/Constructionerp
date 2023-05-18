import React from 'react';

import CrudModule from '@/modules/CrudModule';
import ModelForm from '@/forms/ModelForm';
export default function Model() {
  const entity = 'Model';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'modelName,displayName',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Model Panel';
  const dataTableTitle = 'Model Lists';
  const entityDisplayLabels = ['displayName'];

  const readColumns = [
    { title: 'modelName', dataIndex: 'modelName' },
    { title: 'unit', dataIndex: 'unit' },
    { title: 'price/unit', dataIndex: 'unitprice' },
    { title: 'description', dataIndex: 'description' },
  ];

  const dataTableColumns = [
    { title: 'modelName', dataIndex: 'modelName' },
    { title: 'unit', dataIndex: 'unit' },
    { title: 'price/unit', dataIndex: 'unitprice' },
    { title: 'description', dataIndex: 'description' },
  ];
  const ADD_NEW_ENTITY = 'Add new Model';
  const DATATABLE_TITLE = 'Model List';
  const ENTITY_NAME = 'Model';
  const CREATE_ENTITY = 'Create Model';
  const UPDATE_ENTITY = 'Update Model';
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
      createForm={<ModelForm />}
      updateForm={<ModelForm isUpdateForm={true} />}
      config={config}
    />
  );
}
