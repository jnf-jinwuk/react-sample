import translation_ko_KR from 'src/resource/message/messages_ko.json'
import translation_en_US from 'src/resource/message/message_en.json'

import i18n from 'i18next'
import { initReactI18next, Trans, useTranslation } from 'react-i18next'
import cookie from 'cookie'
import * as Yup from 'yup'

import yupKo from 'yup-locale-ko'
import yupEn from 'yup/lib/index'

/**
 * yup의 내장 locale 파일을 교체하는 함수
 */
export const changeYuplocale = (language: string) => {
  switch (language) {
    case 'ko':
      Yup.setLocale(yupKo as any)
      break
    default:
      Yup.setLocale(yupEn as any)
  }
}

export const resources = {
  ko: { translation: translation_ko_KR },
  en: { translation: translation_en_US },
}

/*
  ko_KR : 한국
  // ja_JP : 일본
  en_US : 미국
  // zh_TW : 대만
*/
const languageMap = {
  ko_KR: 'ko',
  en_US: 'en',
}

export const getLngFromCookie = () => {
  if (typeof window !== 'object') return 'ko_KR'

  const { locale } = cookie.parse(document.cookie)

  return locale || 'en_US'
}

export const getLng = () => {
  if (typeof window !== 'object') return 'ko'

  const { locale } = cookie.parse(document.cookie)

  return (locale && languageMap[locale]) || 'en'
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    react: {
      useSuspense: false,
    },
    resources,
    lng: getLng(),

    // ns: ['translation'],
    // defaultNS: "translation",
    debug: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

interface ITransProps {
  children: string
  values?: unknown
}

export const T = ({ children, values }: ITransProps) => {
  const { t } = useTranslation()

  return (
    <Trans t={t} values={values}>
      {children}
    </Trans>
  )
}
