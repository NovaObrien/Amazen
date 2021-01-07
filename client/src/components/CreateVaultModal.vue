<template>
  <div class="create-vault-modal">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-secondary font border-0" data-toggle="modal" data-target="#exampleModalCenter">
      <h1>+</h1>
    </button>

    <!-- Modal -->
    <div class="modal fade"
         id="exampleModalCenter"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" id="modal">
          <div class="modal-header">
            <p class="modal-title text-dark" id="exampleModalCenterTitle">
              New Vault
            </p>
            <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close" id="modalClose">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card text-left border-0">
              <div class="card-body">
                <form class="form-group" action="" @submit.prevent="createVault">
                  <h4 class="text-dark">
                    Title
                  </h4>
                  <input class="rounded" id="title" type="text" placeholder="Title..." v-model="state.newVault.title">

                  <div class="form-check">
                    <label class="form-check-label mt-5">
                      <input type="checkbox" class="form-check-input" name="optradio" v-model="state.newVault.isPrivate">
                      <h5>Private?</h5>
                      <h6 id="subnote">Private Vaults can only be seen by you</h6>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" @click="createVault(vault)">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { vaultService } from '../services/VaultService'
export default {
  name: 'CreateVaultModal',
  setup() {
    const state = reactive({
      newVault: {}
    })
    return {
      state,
      async createVault(vault) {
        document.getElementById('modalClose').click()
        await vaultService.createVault(state.newVault)
        state.newVault = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.modal-header{
  font-family: 'Redressed', cursive;
  font-size: 60px;
}
#modal{
  border:rgb(0, 255, 179) 6px solid;
}
#title{
  width: 80%;
  border-color: rgba(128, 128, 128, 0.205);
}
#subnote{
  color: grey;
}
.modal-content{
  border: 10px;
}
.modal-header{
  border: 0ch;
}
.modal-body{
  color: black;
}
.modal-footer{
  border: 0ch;
}
</style>
