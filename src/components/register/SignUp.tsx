import { useState } from 'react';
import { t } from "i18next";
import { Caption, Head, Input, Title } from "../../mui/customize";
import { changeSelector } from '../../helper';
import LoadingButton from '@mui/lab/LoadingButton';
import { SelectLogin } from '../../models';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../../services/api';
import { toast } from "react-toastify";

function SignUp() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selector, setSelector] = useState<SelectLogin[]>([
    { id: 1, title: t('email'), placeholder: t('email_placeholder'), value: '' },
    { id: 2, title: t('password'), placeholder: t('password_placeholder'), value: '' },
    { id: 3, title: t('confirm_password'), placeholder: t('confirm_placeholder'), value: '' },
  ])
  const navigate = useNavigate()

  const signUp = () => {
    setIsLoading(true)
    const email = selector[0]
    const password = selector[1]
    const confirmPassword = selector[2]
    request.signup(email.value, password.value, confirmPassword.value)
      .then(res => {
        if (res.status === 200) {
          toast.success(t('successfully_created'), {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate('/login')
          setIsLoading(false)
        }
      })
  }

  return (
    <div className="w-[460px] h-[572px] bg-primary shadow-[0px_10px_13px_0px_rgba(17,_38,_146,_0.05)] rounded-xl z-20">
      <div className="border-0 border-b border-border p-6">
        <Head className="!mb-2">{t('create_account')}</Head>
        <Caption>{t('lets_start')}</Caption>
      </div>
      <div className='flex flex-col justify-between h-[79%]'>
        <div className='flex flex-col items-start gap-6 p-6'>
          {selector.map((item: SelectLogin) => (
            <div className='w-full' key={item.id}>
              <Title className='!mb-1.5'>{item.title}</Title>
              <Input
                fullWidth
                value={item.value}
                placeholder={item.placeholder}
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
            onClick={signUp}
            loading={isLoading}
          >{t('signup')}</LoadingButton>
        </div>
        <div className='flex justify-center items-center mt-auto p-6'>
          <Caption className='!text-sm'>{t('have_an_account')}</Caption>
          <Link to='/login'>
            <Caption className='!text-sm !font-bold !ml-0.5'>{t('login_s')}</Caption>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp