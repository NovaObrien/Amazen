<template>
  <div class="vault-component mx-3 mb-3">
    <div class="col rounded p-3 shadow" id="card">
      <button type="button" class="close text-danger" @click="deleteVault(vault)">
        <span>&times;</span>
      </button>
      <img class="rounded" src="https://via.placeholder.com/250" alt="" @click="openVault(vault)">
      <p>{{ vault.title }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import router from '../router'
import { vaultService } from '../services/VaultService'
export default {
  name: 'VaultComponent',
  props: {
    vaultProp: {

      type: Object,
      default: () => {
        alert('this data does not exist')
      }
    }
  },
  setup(props) {
    return {
      vault: computed(() => props.vaultProp),
      openVault(vault) {
        router.push({ name: 'Vault', params: { id: vault.id } })
      },
      deleteVault(vault) {
        if (window.confirm('Are you sure you want to delete this vault?')) {
          vaultService.deleteVault(vault)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
#card{
background: #B2BEC3;
}

</style>
