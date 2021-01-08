import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { AppState } from '../AppState'

class VaultKeepService {
  async add(id, keep) {
    try {
      await api.post('api/vaultKeep/' + id, keep)
    } catch (error) {
      logger.error(error)
    }
  }

  async getByVaultId(id) {
    try {
      const res = await api.get('api/vaultKeep/' + id)
      AppState.keeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}
export const vaultKeepService = new VaultKeepService()
