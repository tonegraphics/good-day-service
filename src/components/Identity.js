import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Image from 'components/Image'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: props =>
      props.isDesktop ? '32px 48px 0 24px' : '32px 24px 0 24px',
    position: 'absolute',
    zIndex: 5,
    display: 'flex',
    flexDirection: props => (props.isDesktop ? 'row' : 'column'),
    justifyContent: 'space-between',
  },
  dayBai: {
    display: 'flex',
    marginTop: props => (props.isDesktop ? 80 : 0),
    width: props => (props.isDesktop ? 'auto' : '100%'),
    justifyContent: 'flex-end',
  },
}))

export default props => {
  const { isDesktop } = props
  const classes = useStyles({ isDesktop })

  const cloud1Style = isDesktop
    ? {
        width: 640,
        height: 200,
      }
    : {
        width: 320,
        height: 100,
      }

  const cloud2Style = isDesktop
    ? {
        width: 266,
        height: 176,
      }
    : {
        width: 133,
        height: 88,
      }

  return (
    <div className={classes.root}>
      <Image filename="cloud1.png" style={cloud1Style} />
      <div className={classes.dayBai}>
        <Image filename="cloud2.png" style={cloud2Style} />
      </div>
    </div>
  )
}
