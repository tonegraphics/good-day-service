import React from 'react'
import { makeStyles } from '@material-ui/core'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: props => ({
    color: colors.brown,
    fontSize: fonts(props.matches).headline,
    borderBottom: `6px solid ${colors.red}`,
    marginBottom: '16px',
    display: 'inline-block',
    '&:first-letter': {
      fontSize: fonts(props.matches).firstLetter,
    },
  }),
}))

export default props => {
  const matches = useMediaQuery('(min-width: 1080px)')
  const classes = useStyles({ matches })
  return (
    <div>
      <h1 className={classes.title}>{props.children}</h1>
    </div>
  )
}
