import React, { useRef } from 'react'
import { FormContainer } from '../components/styled/FormContainer'
import { SecondaryButton } from '../components/styled/SecondaryButton'
import { TextInput } from '../components/styled/TextInput'

export const LoginForm = ({ onLogin }) => {
  const loginRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      phone: loginRef.current?.value || '',
      password: passwordRef.current?.value || ''
    }
    onLogin(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <TextInput
          inputRef={loginRef}
          id="login"
          name="login"
          label="Логін"
          color="secondary"
          variant="outlined"
        />
        <TextInput
          inputRef={passwordRef}
          id="password"
          type="password"
          name="password"
          label="Пароль"
          color="secondary"
          variant="outlined"
        />
      </FormContainer>
      <FormContainer>
        <SecondaryButton
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Увійти
        </SecondaryButton>
      </FormContainer>
    </form>
  )
}
