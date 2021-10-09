import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { useAuthApiService } from '../ioc/useAuthApiService'

export const useRefreshReq = () => {
  const auth = useAuthApiService()

  const callback = useCallback(
    async ({ refresh }) => auth.refreshTokens(refresh),
    [auth]
  )

  return useMutation(callback)
}
