/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid, Button } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const ArrowBack = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <Link to="/">
          <Button basic icon="arrow left" circular />
        </Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ArrowBack;
