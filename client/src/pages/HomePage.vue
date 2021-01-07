<template>
  <div class="home grid m-1">
    <keep-component v-for="k in keeps" :key="k.id" :keep-prop="k" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import KeepComponent from '../components/KeepComponent.vue'
import { keepService } from '../services/KeepService'
import { AppState } from '../AppState'

export default {
  components: { KeepComponent },
  name: 'Home',

  setup() {
    onMounted(() => {
      keepService.getKeeps()
    })
    return {
      keeps: computed(() => AppState.keeps)
    }
  }
}
</script>

<style scoped lang="scss">

.home{
 column-count: 4;
}

@media(max-width: 600px){
  .home{
    column-count: 2;

  }
}
</style>
