import { useState } from 'react';
import { t } from "i18next";
import { BpCheckedIcon, BpIcon, Caption, Head, Input, Title } from "../../mui/customize";
import { Checkbox } from '@mui/material';
import { changeSelector } from '../../helper';
import LoadingButton from '@mui/lab/LoadingButton';
import { SelectLogin } from '../../models';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../../services/api';
import { toast } from "react-toastify";

interface Detail {
  email: {
    placeholder: string; title: string;
  };
  password: {
    placeholder: string; title: string;
  };
  confirm_placeholder: {
    placeholder: string; title: string;
  };
}

function SignUp() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isAgree, setIsAgree] = useState<boolean>(false)
  const [selector, setSelector] = useState<SelectLogin[]>([
    { id: 1, title: t('email'), placeholder: t('email_placeholder'), value: '', type: 'email', name: 'email' },
    { id: 2, title: t('password'), placeholder: t('password_placeholder'), value: '', type: 'password', name: 'password' },
    { id: 3, title: t('confirm_password'), placeholder: t('confirm_placeholder'), value: '', type: 'password', name: 'confirm_placeholder' },
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
      .catch(() => setIsLoading(false))
  }

  const changeAgree = () =>
    setIsAgree(!isAgree);

  const isDisable = (selector[0].value && selector[1].value && selector[2].value && isAgree) ? true : false

  const detailField: Detail = {
    email: { placeholder: t('email_placeholder'), title: t('email') },
    password: { placeholder: t('password_placeholder'), title: t('password') },
    confirm_placeholder: { placeholder: t('confirm_placeholder'), title: t('confirm_password') }
  }

  return (
    <div className="w-[460px] min-h-[572px] bg-primary shadow-[0px_10px_13px_0px_rgba(17,_38,_146,_0.05)] rounded-xl z-20">
      <div className="border-0 border-b border-border p-6">
        <Head className="!mb-2">{t('create_account')}</Head>
        <Caption>{t('lets_start')}</Caption>
      </div>
      <div className='flex flex-col justify-between h-[79%]'>
        <div className='flex flex-col items-start gap-6 p-6'>
          {selector.map((item: SelectLogin) => (
            <div className='w-full' key={item.id}>
              <Title className='!mb-1.5'>{detailField[item.name].title}</Title>
              <Input
                fullWidth
                type={item.type}
                value={item.value}
                placeholder={detailField[item.name].placeholder}
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
            disabled={!isDisable}
          >{t('signup')}</LoadingButton>
          <div className='flex items-start justify-center gap-2'>
            <Checkbox
              checkedIcon={<BpCheckedIcon />}
              icon={<BpIcon />}
              className='!p-1'
              disableRipple
              checked={isAgree}
              onChange={changeAgree}
            />
            <Caption onClick={changeAgree} className='select-none'>{t('read_agree_rutilea')}</Caption>
          </div>
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