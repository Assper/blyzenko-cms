import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { useAuthApiService } from '../ioc/useAuthApiService'

export const useLogoutReq = () => {
  const auth = useAuthApiService()
  const callback = useCallback(
    (refreshToken) => auth.revokeTokens(refreshToken),
    [auth]
  )
  return useMutation(callback)
}
