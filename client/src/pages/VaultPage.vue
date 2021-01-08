<template>
  <div class="vault-page grid m-1">
    <vault-keep-component v-for="k in keeps" :key="k.id" :keep-prop="k" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { vaultKeepService } from '../services/VaultKeepService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'VaultPage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      vaultKeepService.getByVaultId(route.params.id)
    })
    return {
      keeps: computed(() => AppState.keeps)
    }
  },
  components: { }
}
</script>

<style lang="scss" scoped>
.grid{
  columns: 4;
}
@media(max-width: 600px){
  .grid{
    column-count: 2;

  }
}

</style>
