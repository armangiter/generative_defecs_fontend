import { useState } from 'react';
import { t } from "i18next";
import { Caption, Head, Input, Title } from "../../mui/customize";
import { changeSelector } from '../../helper';
import { SelectLogin } from '../../models';
import { Link } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { request } from '../../services/api';
import Cookies from 'universal-cookie';

interface Detail {
  email: {
    placeholder: string; title: string;
  };
  password: {
    placeholder: string; title: string;
  };
}

function Login() {

  const cookies: Cookies = new Cookies()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selector, setSelector] = useState<SelectLogin[]>([
    { id: 1, title: t('email'), placeholder: t('email_placeholder'), value: '', type: 'email' },
    { id: 2, title: t('password'), placeholder: t('password_placeholder'), value: '', type: 'password' },
  ])

  const login = () => {
    setIsLoading(true)
    const email = selector[0]
    const password = selector[1]
    request.login(email.value, password.value)
      .then(res => {
        setIsLoading(false)
        if (res && res.status === 200) {
          window.location.reload()
          cookies.set('access', res.data.access, { path: '/' });
          cookies.set('refresh', res.data.refresh, { path: '/' });
        } else {
          setSelector([
            { ...selector[0], value: '' },
            { ...selector[1], value: '' },
          ])
        }
      })
      .catch(() => setIsLoading(false))
  }

  const detailField: Detail = {
    email: { placeholder: t('email_placeholder'), title: t('email') },
    password: { placeholder: t('password_placeholder'), title: t('password') }
  }

  const isDisable = (selector[0].value && selector[1].value) ? true : false

  return (
    <div className="w-[460px] h-[572px] bg-primary shadow-[0px_10px_13px_0px_rgba(17,_38,_146,_0.05)] rounded-xl z-20">
      <div className="border-0 border-b border-border p-6">
        <Head className="!mb-2">{t('login')}</Head>
        <Caption>{t('welcome_back')}</Caption>
      </div>
      <div className='flex flex-col justify-between h-[79%]'>
        <div className='flex flex-col items-start gap-6 p-6'>
          {selector.map((item: SelectLogin) => (
            <div className='w-full' key={item.id}>
              <Title className='!mb-1.5'>{detailField[item.type].title}</Title>
              <Input
                fullWidth
                type={item.type}
                value={item.value}
                placeholder={detailField[item.type].placeholder}
                onChange={event => {
                  const newValue = event.target.value
                  const newSelector = changeSelector(selector, newValue, item.id)

                  setSelector(newSelector)
                }}
              />
            </div>
          ))}
          <LoadingButton
            color='secondary'
            className='!w-full !bg-dark-100 !rounded-md !h-10'
            onClick={login}
            loading={isLoading}
            disabled={!isDisable}
          >{t('login')}</LoadingButton>
        </div>
        <div className='flex justify-center items-center mt-auto p-6'>
          <Caption className='!text-sm'>{t('dont_have_account')}</Caption>
          <Link to='/signup'>
            <Caption className='!text-sm !font-bold !ml-0.5'>{t('signup_for_free')}</Caption>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login