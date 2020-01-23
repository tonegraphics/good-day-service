import React from 'react'
import ServiceCardList from 'components/ServiceCardList'

export default props => {
  const { classes, isDesktop } = props
  return (
    <div>
      <div className={classes.top}>
        <p className={classes.body}>
          グッドデイサービスでは以下の4つのサービスを提供しています。{'\n'}
          平日はもちろん、土曜・祝日もご利用いただけます！{'\n'}
          (日曜・年末年始(12/30 ~ 1/3) はお休みです。)
        </p>
      </div>
      <ServiceCardList {...props} />
      <div className={classes.end}>
        {isDesktop ? (
          <p className={classes.body + ' ' + classes.bold}>
            ご利用料金の詳細等については、以下の電話番号にご連絡ください！
          </p>
        ) : (
          <>
            <p className={classes.body + ' ' + classes.bold}>
              ご利用料金の詳細等については、
            </p>
            <p className={classes.body + ' ' + classes.bold}>
              以下の電話番号にご連絡ください！
            </p>
          </>
        )}
      </div>
    </div>
  )
}
