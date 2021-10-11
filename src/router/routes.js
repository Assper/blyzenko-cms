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
      shop: (number) => `${admin}/shops/${number}`,
      settings: (number) => `${admin}/shops/${number}/settings`,
      products: (number) => `${admin}/shops/${number}/products`
    }
  }
}
