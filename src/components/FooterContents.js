import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'

const useStyles = makeStyles(theme => ({
  contentsWrapper: props => ({
    maxWidth: 1024,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: props.matches ? 'center' : 'flex-start',
    alignItems: 'flex-start',
    color: colors.white,
    padding: '32px 16px',
  }),
  company: {
    margin: '0 48px 32px 0',
  },
  companyName: props => ({
    fontSize: fonts(props.matches).h2,
    marginBottom: 8,
  }),
  address: {
    marginBottom: 8,
  },
  number: {
    margin: 0,
  },
  link: props => ({
    fontSize: fonts(props.matches).body,
    color: colors.white,
    display: 'block',
    textDecoration: 'underline',
    marginBottom: 20,
  }),
}))

export default () => {
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })
  return (
    <div className={classes.contentsWrapper}>
      <div className={classes.company}>
        <h3 className={classes.companyName}>GOOD ONE 株式会社</h3>
        <p className={classes.address}>
          〒820-0001
          <br />
          福岡県飯塚市鯰田64番地1
        </p>
        <p className={classes.number}>TEL: 0948-29-4112</p>
        <p className={classes.number}>FAX: 0948-29-4144</p>
      </div>
      <div>
        <Link to="/" className={classes.link}>
          トップ
        </Link>
        <Link to="/services" className={classes.link}>
          サービス
        </Link>
        <Link to="/access" className={classes.link}>
          アクセス
        </Link>
        <Link to="/company" className={classes.link}>
          会社概要
        </Link>
      </div>
    </div>
  )
}
