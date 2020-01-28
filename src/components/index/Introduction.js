import React from 'react'
import { Grid } from '@material-ui/core'
import Image from 'components/Image'
import Button from 'components/common/Button'
import { makeStyles } from '@material-ui/styles'
import { fonts } from 'libs/fonts'
import { colors } from 'libs/colors'
import H2 from 'components/common/H2'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: props => (props.isDesktop ? 0 : 24),
  },
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: '32px',
    whiteSpace: 'pre-line',
    marginBottom: 16,
  },
  highlighter: {
    fontWeight: 'bold',
    color: colors.red,
  },
  identity: {
    fontWeight: 'bold',
  },
  subCard: {
    padding: 0,
  },
  subCardBody: {
    height: props => (props.isDesktop ? 64 : 'auto'),
  },
}))

export default ({ isDesktop }) => {
  const classes = useStyles({ isDesktop })

  return (
    <div>
      <Grid
        container
        spacing={isDesktop ? 5 : 0}
        className={classes.root}
        direction={isDesktop ? 'row-reverse' : 'row'}
      >
        <Grid item xs={isDesktop ? 9 : 12}>
          <p className={classes.body}>
            {
              'グッドデイサービスは、福岡県飯塚市鯰田にある\n高齢者・障がい者・障がい児'
            }
            <span className={classes.highlighter}>
              共生型福祉サービス事業所
            </span>
            です。
          </p>
          <H2>企業理念</H2>
          <p className={classes.body + ' ' + classes.identity}>
            年齡・認知症や障がい等に関わらず家族のような雰囲気を心掛け、ともに支え合い共に助け合い誰もが地域で共に過ごせる様な環境（共生）笑って帰れる様な場所づくりに日々努めていきます。
          </p>
        </Grid>
        <Grid item xs={isDesktop ? 3 : 12}>
          <Image
            filename="falcon.png"
            style={{ width: 200, margin: '0 auto' }}
          />
        </Grid>
      </Grid>
      <Button link="/services" title="サービスの詳細はこちら→" />
    </div>
  )
}
