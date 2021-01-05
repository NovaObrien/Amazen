<template>
  <div class="vault-component" @click="openVault(vault)">
    <div class="col rounded p-3 shadow" id="card">
      <img class="rounded" src="https://via.placeholder.com/250" alt="">
      <p>Vault Name</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import router from '../router'
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
      }
      // NOTE Needs Delete Function
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
