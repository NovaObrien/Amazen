import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class KeepService {
  async getMyKeeps() {
    try {
      const res = await api.get(`profile/${AppState.profile.id}`)
      AppState.keeps = res.data
      logger.log(AppState.keeps)
    } catch (error) {
      logger.error('Get Failed', error)
    }
  }

  async getKeeps() {
    try {
      const res = await api.get('api/keep')
      AppState.keeps = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error('Get Failed </3', error)
    }
  }

  async createKeep(keep) {
    try {
      const res = await api.post('api/keep', keep)
      AppState.keeps = [...AppState.keeps, res.data]
    } catch (error) {
      logger.log(error)
    }
  }
}
export const keepService = new KeepService()
