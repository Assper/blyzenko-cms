const auth = '/auth'
const admin = '/admin'

export const routes = {
  auth: {
    base: auth,
    login: `${auth}/login`
  },
  admin: {
    base: admin,
    dashboard: `${admin}/dashboard`,
    shops: {
      base: `${admin}/shops`,
      shop: (uuid) => `${admin}/shops/${uuid}`,
      settings: (uuid) => `${admin}/shops/${uuid}/settings`,
      products: (uuid) => `${admin}/shops/${uuid}/products`
    }
  }
}
