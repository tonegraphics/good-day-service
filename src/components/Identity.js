import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'

const useStyles = makeStyles(theme => ({
  body: {
    color: colors.brown,
    fontSize: props => fonts(props.matches).identity,
    padding: props => (props.matches ? '24px 40px' : '16px 24px'),
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'inline-block',
    margin: 0,
    lineHeight: 1.3,
    borderRadius: 10,
    position: 'absolute',
    top: props => (props.matches ? 64 : 32),
    left: props => (props.matches ? 32 : 16),
    zIndex: 100,
  },
}))

export default () => {
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })

  return (
    <p className={classes.body}>
      年齢・認知症や障がい等に関わらず、
      <br />
      誰もが共に過ごせる場所
    </p>
  )
}
