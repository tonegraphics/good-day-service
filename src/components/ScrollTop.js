import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Zoom,
  Fab,
  Slide,
  useScrollTrigger,
  useMediaQuery,
} from '@material-ui/core'
import Image from 'components/Image'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: props => (props.matches ? 40 : 24),
    right: props => (props.matches ? 16 : 8),
  },
}))

export default () => {
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Image
          filename="up_icon.png"
          style={
            matches
              ? {
                  height: 96,
                  width: 96,
                }
              : {
                  height: 72,
                  width: 72,
                }
          }
        />
      </div>
    </Zoom>
  )
}
