import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import styled from "styled-components"

const LeadParagraph = styled.p`
color: #6a7889;
`

const Legal = () => {
  const { t } = useTranslation('about')
  return (
    <main tabIndex="-1" className="sep-border"
    style={{
      backgroundColor: 'rgb(109, 210, 175)'
    }}>
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-8 text-center">
              <img alt=""  src="https://gsm.edu.pe/wp-content/uploads/2019/01/NEW-LOGO-FOOTER.png"
              style={{ maxHeight: 100, paddingLeft: -2 }}/>
              <LeadParagraph className="lead">{t('leadText')}</LeadParagraph>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Legal
