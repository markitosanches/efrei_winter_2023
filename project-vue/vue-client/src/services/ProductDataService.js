import http from '../http-common'
class ProductDataService {
  getAll () {
    return http.get('/product')
  }
}
export default new ProductDataService()
