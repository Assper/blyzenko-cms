import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { useAuthApiService } from '../ioc/useAuthApiService'

export const useLoginReq = () => {
  const auth = useAuthApiService()
  const callback = useCallback((creds) => auth.loginByPassword(creds), [auth])
  return useMutation(callback)
}
