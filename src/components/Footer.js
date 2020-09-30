import React from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import styled from 'styled-components'

const Footer = () => {
  const { t } = useTranslation('footer')
  const Paragraph = styled.p`
    color: #9aa3af;
  `
  return (
    <footer 
     className=" footer-small"
     style={{
      backgroundColor: '#005c9a'
    }}
    >
      <div className="container">
        <div className="row align-items-top text-center text-md-left">
          <div className="col-12 col-md-4 mt-4 mt-md-0 text-lg-left">
            <h2 className="h3">
              <strong>{t('followAndContribute')}</strong>
            </h2>
            <Paragraph>{t('shareText')}</Paragraph>
            <p className="lead">
              <a
                href="https://api.whatsapp.com/send?phone=51955153580&text=Hola,%20deseo%20Informaci%C3%B3n?"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Whatsapp"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/academiaGSM"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/academiagruposanmarcos/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNNdS3uSgwmDeas2fP3BaVA"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" aria-hidden="true" />
              </a>
              <a
                href="mailto:informes@gsm.edu.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="E-mail"
              >
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
            </p>
          </div>

          <div className="col-12 col-md-5 offset-md-2 mt-5 mt-md-0 text-lg-left">
            <h2 className="h3">
              <strong>{t('aboutUs')}</strong>
            </h2>
            <Paragraph>{t('aboutUsText')}</Paragraph>
            <img
              src="https://gsm.edu.pe/wp-content/uploads/2019/01/NEW-LOGO-FOOTER.png"
              alt="GSM"
              style={{ maxHeight: 70, paddingLeft: 20 }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            © GSMCovid19 2020 -{' '}
            <Trans i18nKey="footer:madeWithLove">
              Hecho con amor
              <TranslatedImg
                src="/img/heart.svg"
                alt="Heart"
                style={{ padding: '0 10px', maxWidth: 45 }}
              >
              amor</TranslatedImg>
              en Perú
            </Trans>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const FooterSmall = () => {
  return (
    <footer className="footer-small">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p>
              {' '}
              © GSMCovid19 - Hecho con
              <img
                src="/img/heart.svg"
                alt="Heart"
                style={{ padding: '0 10px', maxWidth: 45 }}
              />
              en Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Simple wrapper over an image element to ease
// the Trans component interpolation for the
// "alt" attribute
const TranslatedImg = ({children, ...props}) => {
  return (
  <img {...props} alt={children} />
)}


export default Footer
