import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class KeepVaultService {
  add(id, keep) {
    try {
      api.post('api/vaultKeep/' + id, keep)
    } catch (error) {
      logger.error(error)
    }
  }
}
export const keepVaultService = new KeepVaultService()
