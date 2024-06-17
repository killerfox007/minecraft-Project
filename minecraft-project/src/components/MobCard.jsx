import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, ButtonBase } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const MobCard = ({ singleMob }) => {
  return (
    <Paper 
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === '#0062ff' ? '#0062ff' : '#6e2323',
      }}
    >
      <Grid container spacing={1} columns={5}>
        <Grid item>
          <ButtonBase sx={{ width: 64, height: 64 }}>
            <Img alt="complex" src={singleMob.Image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={1} sm container spacing={2}>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs >
              <Typography gutterBottom variant="subtitle1" component="div" color="#ffffff">
                Name: {singleMob.name}
              </Typography>
              <Typography variant="body2" color="#ffffff">
              Health: {singleMob.Health}
              </Typography>
              <Typography variant="body2" color="#ffffff">
              Damage: {singleMob.Damage}
              </Typography>
              <Typography variant="body2" color="#ffffff">
              Difficulty: {singleMob.Difficulty}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MobCard