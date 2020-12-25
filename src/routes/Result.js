import React, { useContext } from 'react';
import { firestore, signOut } from '../components/Firebase';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  RadialChart,
  VerticalBarSeries,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
} from 'react-vis';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../providers/UserProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
    height: '500px',
  },
  text: {
    margin: theme.spacing(1),
  },
  header: {
    margin: theme.spacing(2),
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
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h3" align="center">
            See All The Guesses Below!
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.header}>
          <Typography variant="h4" align="center">
            If you came here to guess, sorry we are no longer accepting guesses.
          </Typography>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="body1" align="center" className={classes.text}>
            In the near future when you come back to the site, this page will
            show a summary of all the guesses so far.
          </Typography>
          <Typography variant="body1" align="center" className={classes.text}>
            If you would like to be notified by e-mail when this page is
            updated, please click "Keep me updated". Otherwise, click "No
            thanks" and you will be logged out.
          </Typography>
        </Grid> */}
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

        <Grid item xs={12} md={4} align="center">
          <Typography variant="h5" align="center">
            Sex
          </Typography>
          <RadialChart
            width={300}
            height={300}
            showLabels={true}
            labelsStyle={{
              fontFamily: 'Roboto',
              fontSize: '20px',
            }}
            data={[
              { angle: 8, label: 'male' },
              { angle: 15, label: 'female' },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={4} align="center">
          <Typography variant="h5" align="center">
            Eye Color
          </Typography>
          <RadialChart
            height={300}
            width={300}
            showLabels={true}
            labelsStyle={{
              fontFamily: 'Roboto',
              fontSize: '20px',
            }}
            colorType="literal"
            data={[
              { angle: 10, label: 'brown', color: 'brown' },
              { angle: 9, label: 'blue', color: 'blue' },
              { angle: 3, label: 'green', color: 'green' },
              { angle: 1, label: 'hazel', color: 'gray' },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={4} align="center">
          <Typography variant="h5" align="center">
            Hair Color
          </Typography>
          <RadialChart
            height={300}
            width={300}
            showLabels={true}
            labelsStyle={{
              fontFamily: 'Roboto',
              fontSize: '20px',
            }}
            margin={{ left: 50, right: 50, top: 50, bottom: 50 }}
            colorType="literal"
            labelsRadiusMultiplier={1.2}
            data={[
              { angle: 10, label: 'brown', color: 'brown' },
              { angle: 1, label: 'blonde', color: 'yellow' },
              { angle: 2, label: 'black', color: 'black' },
              { angle: 9, label: 'red', color: 'red' },
              { angle: 1, label: 'bald', color: 'white' },
            ]}
          />
        </Grid>

        <Grid item xs={12} lg={6} align="center">
          <Typography variant="h5" align="center">
            Weight (pounds)
          </Typography>
          <XYPlot
            height={400}
            width={700}
            xType="ordinal"
            yDomain={[0, 10]}
            getxDomain={(d) => d.x}
          >
            <XAxis
              style={{
                text: {
                  fontSize: 14,
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
            <HorizontalGridLines />
            <VerticalBarSeries
              xType="ordinal"
              yType="linear"
              animation={{ damping: 10, stiffness: 20 }}
              data={[
                { x: '5.8125 - 6.65', y: 4 },
                { x: '6.65 - 7.4875', y: 8 },
                { x: '7.4875 - 8.325', y: 5 },
                { x: '8.325 - 9.1625', y: 3 },
                { x: '9.1625 - 10', y: 2 },
              ]}
            />
          </XYPlot>
        </Grid>

        <Grid item xs={12} lg={6} align="center">
          <Typography variant="h5" align="center">
            Length (in)
          </Typography>
          <XYPlot
            height={400}
            width={700}
            xType="ordinal"
            yDomain={[0, 10]}
            getxDomain={(d) => d.x}
          >
            <XAxis
              // tickLabelAngle={45}
              // tickPadding={40}
              style={{
                text: {
                  fontSize: 14,
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
            <HorizontalGridLines />
            <VerticalBarSeries
              xType="ordinal"
              yType="linear"
              animation={{ damping: 10, stiffness: 20 }}
              data={[
                { x: '10 - 13.2', y: 1 },
                { x: '13.2 - 16.4', y: 2 },
                { x: '16.4 - 19.6', y: 7 },
                { x: '19.6 - 22.8', y: 10 },
                { x: '22.8 - 26', y: 2 },
              ]}
            />
          </XYPlot>
        </Grid>

        <Grid item xs={12} lg={6} align="center">
          <Typography variant="h5" align="center">
            Time
          </Typography>
          <XYPlot
            height={400}
            width={700}
            xType="ordinal"
            yDomain={[0, 10]}
            getxDomain={(d) => d.x}
          >
            <XAxis
              style={{
                text: {
                  fontSize: 14,
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
            <HorizontalGridLines />
            <VerticalBarSeries
              xType="ordinal"
              yType="linear"
              animation={{ damping: 10, stiffness: 20 }}
              data={[
                { x: '12:00 am - 4:16 am', y: 6 },
                { x: '4:16 am - 8:32 am', y: 5 },
                { x: '8:32 am - 12:48 pm', y: 5 },
                { x: '12:48 pm - 5:04 pm', y: 4 },
                { x: '5:04 pm - 9:21 pm', y: 3 },
              ]}
            />
          </XYPlot>
        </Grid>

        <Grid item xs={12} lg={6} align="center">
          <Typography variant="h5" align="center">
            Date
          </Typography>
          <XYPlot
            height={400}
            width={700}
            xType="ordinal"
            yDomain={[0, 10]}
            getxDomain={(d) => d.x}
          >
            <XAxis
              style={{
                text: {
                  fontSize: 14,
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
            <HorizontalGridLines />
            <VerticalBarSeries
              xType="ordinal"
              yType="linear"
              animation={{ damping: 10, stiffness: 20 }}
              data={[
                { x: '12/30/20 - 1/3/21', y: 4 },
                { x: '1/3/21 - 1/8/21', y: 9 },
                { x: '1/8/21 - 1/13/21', y: 2 },
                { x: '1/13/21 - 1/18/21', y: 2 },
                { x: '1/18/21 - 1/23/21', y: 4 },
              ]}
            />
          </XYPlot>
        </Grid>
      </Grid>
    </>
  );
};

export default Result;
