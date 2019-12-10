import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'

import Button from 'components/Button'
import FooterContents from 'components/FooterContents'

const useStyles = makeStyles(theme => ({
  caption: props => ({
    color: colors.brown,
    fontSize: fonts(props.matches).body,
    textAlign: 'center',
    marginBottom: 8,
  }),
  footer: {
    backgroundColor: colors.brown,
    display: 'flex',
    alignItems: 'center',
  },
}))

export default () => {
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })
  return (
    <div>
      <h3 className={classes.caption}>お問い合わせはこちら</h3>
      <Button link="/">0948-29-4112</Button>
      <footer className={classes.footer}>
        <FooterContents />
      </footer>
    </div>
  )
}
