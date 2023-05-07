import i18next from 'i18next';

const Footer = () => {

  const { t } = i18next;

  return (
    <footer className='w-full pb-10'>
      <p className="text-light-200 text-center">© {t('footer')}</p>
    </footer>
  )
}

export default Footer