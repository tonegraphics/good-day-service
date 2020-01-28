import React from 'react'
import { makeStyles } from '@material-ui/core'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  buttonWapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 16px 32px',
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
    transition: '0.3s',
    '&:hover': {
      opacity: 0.7,
    },
  },
}))

export default props => {
  const { link, target, title } = props
  const classes = useStyles()
  return (
    <div className={classes.buttonWapper}>
<<<<<<< HEAD
      <a className={classes.button} href={props.link} target={props.target}>
        <main>{props.children}</main>
=======
      <a className={classes.button} href={link} target={target}>
        {title}
>>>>>>> 21b34fef6d800b838f1b25b26f7f09b86ae77a94
      </a>
    </div>
  )
}
