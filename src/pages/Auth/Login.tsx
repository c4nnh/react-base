import { FormProvider, useForm } from 'react-hook-form'
import { LoginPayload } from '../../models'
import { useAuthStore } from '../../store'

export const Login: React.FC = () => {
  const formMethods = useForm<LoginPayload>()
  const { login } = useAuthStore()
  const { handleSubmit } = formMethods

  const handleLogin = handleSubmit(data => {
    login({
      user: {
        id: '1',
        username: data.username,
      },
      token: {
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      },
    })
  })

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col">
        Username: <input name="username" />
        Password: <input name="password" type="password" />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </FormProvider>
  )
}
