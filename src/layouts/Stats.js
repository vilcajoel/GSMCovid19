import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import { useTranslation, Trans } from 'react-i18next'

import PyChart from '../components/PyChart'
import AlignmentChart from '../components/AlignmentChart'

const Stats = () => {
  const { t } = useTranslation('stats')
  return (
    <main
      className="fdb-block"
      style={{
        backgroundImage: 'url(http://gsm.edu.pe/wp-content/uploads/2019/01/duotono-min.jpg)',
        paddingTop: '4.5rem'
      }}
      tabIndex="-1"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-15">
            <div className="fdb-box fdb-touch" style={{ padding: 0 }}>
              <ReactTypeformEmbed
                style={{ position: 'static', height: '90vh' }}
                url="https://coronavirus.app/tracking/peru"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Stats
