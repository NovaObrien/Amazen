import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
// import { api } from './AxiosService'

class VaultService {
  async getMyVaults() {
    try {
      logger.log(AppState.profile)
      // const res = await api('profile/${AppState.profile.id}/vaults')
      // AppState.vaults = res.data
    } catch (err) {
      logger.error('Get Failed', err)
    }
  }
}

export const vaultService = new VaultService()
