<template>
  <div class="public-profile-page container-fluid">
    <div class="row my-5 ml-3">
      <div class="col-2">
        <img class="rounded img-fluid" id="profile-pic" :src="profile.picture" alt="" />
      </div>
      <div class="col mx-auto">
        <h1>{{ profile.name }}</h1>
        <h1>Vaults: {{ vaults.length }}</h1>
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
        <div class="row">
          <h1 class="ml-4" id="font">
            Keeps
          </h1>
          <create-keep-modal />
        </div>
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
import { profileService } from '../services/ProfileService'
import { vaultService } from '../services/VaultService'
import { useRoute } from 'vue-router'
export default {
  name: 'PublicProfilePage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      profileService.getPublicProfile(route.params.id)
      vaultService.getPublicVaults(route.params.id)
    })
    return {
      profile: computed(() => AppState.publicProfile),
      vaults: computed(() => AppState.vaults)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
