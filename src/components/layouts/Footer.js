import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'
import Button from 'components/common/Button'
import FooterContents from 'components/layouts/FooterContents'

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
  const matches = useMediaQuery('(min-width: 1080px)')
  const classes = useStyles({ matches })
  return (
    <div>
      <h3 className={classes.caption}>お問い合わせはこちら</h3>
      <Button link="tel:0948-29-4112" title="0948-29-4112" />
      <footer className={classes.footer}>
        <FooterContents />
      </footer>
    </div>
  )
}
