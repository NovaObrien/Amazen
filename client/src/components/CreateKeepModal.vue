<template>
  <div class="create-keep-modal">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-secondary font" data-toggle="modal" data-target="#keep-modal">
      <h1>
        +
      </h1>
    </button>

    <!-- Modal -->
    <div class="modal fade"
         id="keep-modal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" id="modal">
          <div class="modal-header">
            <h1 class="modal-title text-dark" id="keep-title">
              New Keep
            </h1>
            <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card text-left border-0">
              <div class="card-body">
                <form class="form-group" action="" @submit.prevent="createKeep">
                  <h4 class="text-dark">
                    Name
                  </h4>
                  <input class="rounded"
                         id="title"
                         type="text"
                         placeholder="Name..."
                         autocomplete="off"
                         v-model="state.newKeep.name"
                  >
                  <h4 class="text-dark">
                    ImgUrl
                  </h4>
                  <input class="rounded"
                         id="title"
                         type="text"
                         placeholder="ImgUrl..."
                         autocomplete="off"
                         v-model="state.newKeep.img"
                  >
                  <h4 class="text-dark">
                    Description
                  </h4>
                  <textarea
                    class="form-control rounded mt-3 text-dark"
                    rows="5"
                    name=""
                    id=""
                    aria-describedby="Body"
                    placeholder="Description..."
                    v-model="state.newKeep.description"
                  />
                  <!-- <h4 class="text-dark">
                    Tags
                  </h4> -->
                  <!-- <input class="rounded"
                         id="title"
                         type="text"
                         placeholder="Tags..."
                         autocomplete="off"
                         v-model="newKeep.tag"
                  > -->
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" @click="createKeep(keep)">
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
import { keepService } from '../services/KeepService'
export default {
  name: 'CreateKeepModal',
  setup() {
    const state = reactive({
      newKeep: {}
    })
    return {
      state,
      async createKeep(keep) {
        document.getElementById('modalClose').click()
        await keepService.createKeep(state.newKeep)
        state.newVault = {}
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
input:focus {
    // outline: none !important;
    outline-color: rgb(0, 204, 255);
    // box-shadow: 0 0 15px rgb(0, 255, 179);
}
#keep-title{
  font-family: 'Redressed', cursive;
  font-size: 60px;
}
#modal{
  border:rgb(0, 255, 179) 6px solid;
}
#title{
  width: 100%;
  border-color: rgba(128, 128, 128, 0.205);
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
