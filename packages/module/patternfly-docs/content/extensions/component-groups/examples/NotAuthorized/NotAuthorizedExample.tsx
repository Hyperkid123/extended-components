import React from 'react';
import { NotAuthorized } from '@patternfly/react-component-groups';
import { Button } from '@patternfly/react-core';

export const BasicExample: React.FunctionComponent = () => {
  const actions = [
    <Button key="1">
      First action
    </Button>,
    <Button key="2" className='pf-u-mx-md'>
      Second action
    </Button>,
  ];
  return (
    <NotAuthorized 
      actions={actions} 
      className="something" 
      description="Description text" 
      serviceName="Demo bundle"
      prevPageButtonText="Go to previous page"
    />
  );
}
