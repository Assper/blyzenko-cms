export class AuthService {
  constructor(authStorage, getAuthState) {
    this.getAuthState = getAuthState
    this.authStorage = authStorage
  }

  getRefresh() {
    const { refresh } = this.getAuthState()
    return refresh || this.authStorage.getRefresh()
  }

  getAuthTokens() {
    const { access, refresh } = this.getAuthState()
    return { access, refresh }
  }

  setAuthTokens(access, refresh) {
    const auth = this.getAuthState()
    auth.setState({ access, refresh })
    this.authStorage.setRefresh(refresh)
    return this.getAuthState()
  }

  logout() {
    const auth = this.getAuthState()
    auth.setState({
      isLogedIn: false,
      user: null,
      access: '',
      refresh: '',
      isAutoLoginComlete: true
    })
    this.authStorage.removeRefresh()
    return auth
  }

  login({ user, access, refresh }) {
    const auth = this.getAuthState()
    auth.setState({
      user,
      access,
      refresh,
      isLogedIn: true,
      isAutoLoginComlete: true
    })
    this.authStorage.setRefresh(refresh)
    return this.getAuthState()
  }
}
