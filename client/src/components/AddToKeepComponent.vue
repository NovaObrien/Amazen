<template>
  <div class="add-to-keep-component" @click="addToVault(vault.id, keep)">
    {{ vault.title }}
  </div>
</template>

<script>
import { computed } from 'vue'
import { keepVaultService } from '../services/KeepVaultService'
import { AppState } from '../AppState'
export default {
  name: 'AddToKeepComponent',
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
      keep: computed(() => AppState.currentKeep),
      addToVault(id, keep) {
        keepVaultService.add(id, keep)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.add-to-keep-component:hover{
background: rgba(177, 177, 177, 0.575);
}
</style>
