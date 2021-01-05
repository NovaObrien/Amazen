<template>
  <div class="profile container-fluid">
    <div class="row my-5 ml-3">
      <div class="col-2">
        <img class="rounded img-fluid" id="profile-pic" :src="profile.picture" alt="" />
      </div>
      <div class="col mx-auto">
        <h1>{{ profile.name }}</h1>
        <h1>Vaults: </h1>
        <h1>Keeps: </h1>
      </div>
      <div class="col"></div>
    </div>
    <div class="row my-5">
      <div class="col">
        <div class="row">
          <h1 class="ml-4" id="font">
            Vaults
          </h1>
          <create-vault-modal />
        </div>
      </div>
    </div>
    <div class="row ml-3">
      <vault-component v-for="v in vaults" :key="v.id" :vault-prop="v" />
    </div>
    <div class="row my-5">
      <div class="col">
        <h1 class="ml-4" id="font">
          Keeps +
        </h1>
      </div>
    </div>
    <div class="row ml-3">
      <!-- NOTE need to build component -->
      <!-- <keep-component /> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { vaultService } from '../services/VaultService'
export default {
  components: { },
  name: 'Profile',
  setup() {
    onMounted(() => {
      vaultService.getMyVaults()
    })
    return {
      profile: computed(() => AppState.profile),
      vault: computed(() => AppState.vaults)
    }
  }
}
</script>

<style scoped>
.profile{
  overflow-x: auto;
}
#font{
  font-family: 'Redressed', cursive;
  font-size: 60px;
}
#profile-pic {
  min-width: 200px;
  min-height: 200px;
  max-width: 275px;
  max-height: 225px;
}
</style>
