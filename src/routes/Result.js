import React, { useContext } from 'react';
import { firestore, signOut } from '../components/Firebase';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  RadialChart,
  MarkSeries,
  VerticalBarSeries,
  XYPlot,
  XAxis,
  YAxis,
} from 'react-vis';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../providers/UserProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    height: '500px',
  },
  text: {
    margin: theme.spacing(1),
  },
  header: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Result = () => {
  const classes = useStyles();
  const user = useContext(UserContext);

  const handleKeepUpdated = async () => {
    const userRef = firestore.doc(`users/${user.userProfile.uid}`);
    try {
      await userRef.update({ requestedUpdates: true });
      signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid
      container
      direction="row"
      alignContent="space-around"
      className={classes.root}
    >
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h3" align="center">
          Thanks for Guessing!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" align="center" className={classes.text}>
          In the near future when you come back to the site, this page will show
          a summary of all the guesses so far.
        </Typography>
        <Typography variant="body1" align="center" className={classes.text}>
          If you would like to be notified by e-mail when this page is updated,
          please click "Keep me updated". Otherwise, click "No thanks" and you
          will be logged out.
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => handleKeepUpdated()}
        >
          Keep me updated
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => signOut()}
        >
          No thanks
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <RadialChart
          width={300}
          height={300}
          showLabels={true}
          labelsStyle={{
            fontFamily: 'Roboto',
            fontSize: '20px',
          }}
          data={[
            { angle: 1, label: 'Male' },
            { angle: 2, label: 'Female' },
          ]}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <XYPlot
          height={400}
          width={400}
          xType="ordinal"
          // yType="linear"
          yDomain={[0, 20]}
          getxDomain={(d) => d.x}
        >
          {/* <VerticalGridLines /> */}
          <XAxis
            // tickLabelAngle={45}
            // tickPadding={40}
            style={{
              text: {
                fontSize: 20,
                fontFamily: 'Roboto',
              },
            }}
          />
          <YAxis
            style={{
              fontFamily: 'Roboto',
              fontSize: 14,
            }}
          />
          <VerticalBarSeries
            // color="red"
            xType="ordinal"
            yType="linear"
            animation={{ damping: 10, stiffness: 20 }}
            data={[
              { x: 'test1', y: 10 },
              { x: 'test2', y: 5 },
              { x: 'test3', y: 15 },
              { x: 'test4', y: 20 },
            ]}
          />
        </XYPlot>
      </Grid>
      <Grid item xs={12} align="center">
        <XYPlot width={300} height={300}>
          <XAxis title="Length" />
          <YAxis title="Weight" />
          <MarkSeries
            data={[
              { x: 22, y: 6.5 },
              { x: 19, y: 7.0 },
              { x: 20, y: 8.0 },
              { x: 20, y: 7.0 },
              { x: 20, y: 7.0 },
            ]}
          />
        </XYPlot>
      </Grid>
    </Grid>
  );
};

export default Result;
