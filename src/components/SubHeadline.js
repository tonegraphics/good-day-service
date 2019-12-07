import React from 'react'
import { makeStyles } from '@material-ui/core'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  title: {
    color: colors.brown,
    fontSize: '32px',
    borderBottom: `4px solid ${colors.red}`,
    marginBottom: '16px',
    display: 'inline-block',
  },
}))

export default props => {
  const classes = useStyles()
  return (
    <div>
      <h2 className={classes.title}>{props.children}</h2>
    </div>
  )
}
