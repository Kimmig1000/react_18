import { ImageList, ImageListItem } from '@mui/material';
import React, { FC }  from 'react';
import { imagesData } from './imagesData';


const Images: FC = () => {
    return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {imagesData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
    </ImageList>
)
}

export default Images