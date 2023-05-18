import React from 'react';

import CrudModule from '@/modules/CrudModule';
import BranchForm from '@/forms/BranchForm';

export default function Branch() {
  const entity = 'Branch';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'codeName,displayName',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Branch Panel';
  const dataTableTitle = 'Branch Lists';
  const entityDisplayLabels = ['displayName'];

  const readColumns = [
    { title: 'branchName', dataIndex: 'branchName' },
    { title: 'code', dataIndex: 'codeName' },
    { title: 'city', dataIndex: 'cityName' },
    { title: 'address', dataIndex: 'Address' },
    { title: 'Mobile', dataIndex: 'MobileNumber' },
  ];

  const dataTableColumns = [
    { title: 'branchName', dataIndex: 'branchName' },
    { title: 'code', dataIndex: 'codeName' },
    { title: 'city', dataIndex: 'cityName' },
    { title: 'address', dataIndex: 'Address' },
    { title: 'Mobile', dataIndex: 'MobileNumber' },
  ];
  const ADD_NEW_ENTITY = 'Add new Branch';
  const DATATABLE_TITLE = 'Branch List';
  const ENTITY_NAME = 'Branch';
  const CREATE_ENTITY = 'Create Branch';
  const UPDATE_ENTITY = 'Update Branch';
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
      createForm={<BranchForm />}
      updateForm={<BranchForm isUpdateForm={true} />}
      config={config}
    />
  );
}
