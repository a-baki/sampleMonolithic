import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Task from './task';
import TaskDetail from './task-detail';
import TaskUpdate from './task-update';
import TaskDeleteDialog from './task-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TaskDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TaskUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TaskUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TaskDetail} />
      <ErrorBoundaryRoute path={match.url} component={Task} />
    </Switch>
  </>
);

export default Routes;
