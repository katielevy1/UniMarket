import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'img/surfboard.jpg',
    title: 'Surfboard',
    price: '250',
  },
  {
    img: 'img/mattress.jpg',
    title: 'Twin sized mattress',
    price: '100',
  },
  {
    img: 'img/camera.jpg',
    title: 'Camera',
    price: '120',
  },
  {
    img: 'img/biobook.jpg',
    title: 'Intro to Biology textbook',
    price: '200',
  },
  {
    img: 'img/tutor.jpeg',
    title: 'Chemistry Tutor',
    price: '10 per hour',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Items = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Items for Sale</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span><b>${tile.price}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Items;