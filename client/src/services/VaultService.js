import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultService {
  async getMyVaults() {
    try {
      logger.log(AppState.profile.id)
      const res = await api.get(`profile/${AppState.profile.id}/vault`)
      AppState.vaults = res.data
      logger.log(AppState.vaults)
    } catch (err) {
      logger.error('Get Failed', err)
    }
  }

  async getPublicVaults(id) {
    try {
      logger.log(AppState.profile.id)
      const res = await api.get('profile/' + id + '/vault')
      AppState.publicVaults = res.data
      logger.log(AppState.publicVaults)
    } catch (err) {
      logger.error('Get Failed', err)
    }
  }

  async createVault(vault) {
    try {
      const res = await api.post('api/vault', vault)
      AppState.vaults = [...AppState.vaults, res.data]
    } catch (error) {
      logger.log(error)
    }
  }

  async deleteVault(vaultData) {
    await api.delete('api/vault/' + vaultData.id, vaultData)
    const index = AppState.vaults.findIndex(v => v.id === vaultData.id)
    AppState.vaults.splice(index, 1)
  }
}

export const vaultService = new VaultService()
