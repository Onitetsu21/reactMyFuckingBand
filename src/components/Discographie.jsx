import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxWidth: '300px',
      backgroundColor: 'lightgray'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

let Discographie = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Container maxWidth="md">
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {
                props.Albums.map((elm, index)=>(      
                    <GridListTile key={index} cols={props.Albums.cols || 1}>
                        <Card className={classes.root} key={index} xs={3}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {elm.titre}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {elm.artiste}
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                                <PlayArrowIcon className={classes.playIcon} />
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>
                            </div>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={elm.cover}
                            title="Live from space album cover"
                        />
                        </Card>
                    </GridListTile>
                ))
            }
            </GridList>
             
        </Container>
      );
}

export default Discographie