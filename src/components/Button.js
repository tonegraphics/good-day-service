import React from 'react'
import { makeStyles } from '@material-ui/core'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  buttonWapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px',
  },
  button: {
    color: colors.white,
    backgroundColor: colors.red,
    borderRadius: 10,
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '16px',
    display: 'block',
    '&:hover': {
      backgroundColor: colors.brown,
      transition: '0.3s',
    },
  },
}))

export default props => {
  const classes = useStyles()
  return (
    <div className={classes.buttonWapper}>
      <a className={classes.button} href={props.link}>
        {props.children}
      </a>
    </div>
  )
}
