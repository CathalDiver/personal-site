import React from 'react'
import { Grid, ButtonBase } from '@material-ui/core'

export default function Image({ imageDetails }) {
  const { src, alt, imgClass } = imageDetails

  return (
    <Grid item>
      <ButtonBase>
        <img className={imgClass} src={src} alt={alt} />
      </ButtonBase>
    </Grid>
  )
}
