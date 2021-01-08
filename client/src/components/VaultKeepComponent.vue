<template>
  <div class="vault-keep-component">
    <div class="grid-item container-fluid rounded-lg px-3 pt-3"
         data-toggle="modal"
         :data-target="'.bd-example-modal-xl'+keep.id"
         id="keep-small"
         @click="setCurrentKeep(keep)"
    >
      <img class="rounded" :src="keep.img" alt="" id="keep-img">
      <div>
        <h4 class="text-secondary" id="title">
          {{ keep.name }}
        </h4>
        <div class="row" id="profile-img-expanded">
          <img :src="keep.creator.picture"
               alt="user photo"
               class="rounded-circle mb-3 ml-3"
               height="50"
               id="profile-img"
               @mouseover="state.showEmail = true"
               @mouseleave="state.showEmail = false"
               @click="selectProfile"
          >
          <div class="ml-3 mt-2" id="email">
            {{ keep.creator.email }}
          </div>
          <!-- <div>
            <h3>
              {{ keep.views }}
            </h3>
          </div> -->
        </div>
      </div>
    </div>

    <div :class="'modal fade bd-example-modal-xl'+keep.id"
         tabindex="-1"
         role="dialog"
         aria-labelledby="myExtraLargeModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" id="profile">
        <div class="modal-content">
          <!-- <div class="modal-header bg-secondary">
          </div> -->

          <div class="modal-body bg-secondary">
            <div class="container-fluid">
              <div class="row">
                <div class="col-5">
                  <img class="rounded" id="modal-img" :src="keep.img" alt="">
                </div>
                <div class="col-7">
                  <div class="row d-flex justify-content-end mr-1">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      id="keepModalClose"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="row d-flex justify-content-center">
                    <p class="mx-1">
                      Views:
                      {{ keep.views }}
                    </p>
                    <p>
                      Keeps:
                      {{ keep.keepSaves }}
                    </p>
                  </div>

                  <div class="row d-flex justify-content-center">
                    <h1>
                      {{ keep.name }}
                    </h1>
                  </div>
                  <div class="row d-flex justify-content-center">
                    <p>
                      {{ keep.description }}
                    </p>
                  </div>

                  <div class="row" id="modal-info">
                    <div class="dropdown" v-if="$route.path != '/'">
                      <div
                        class="dropdown-toggle p-3 rounded large"
                        @click="state.dropOpen = !state.dropOpen"
                      >
                        <h5 class="rounded add-vault-btn">
                          ADD TO VAULT
                        </h5>
                        <div
                          class="dropdown-menu p-0 list-group w-100"
                          :class="{ show: state.dropOpen }"
                          @click="state.dropOpen = false"
                        >
                          <add-to-keep-component v-for="v in vaults" :key="v.id" :vault-prop="v" />
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-danger" @click="removeVaultKeep(keep)">
                      Remove From Vault
                    </button>
                  </div>
                </div>

                <!-- <div class="modal-footer bg-secondary"></div> -->
                <!-- <button type="button" class="btn btn-primary">
              Save changes
            </button> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import router from '../router'
import { vaultKeepService } from '../services/VaultKeepService'
export default {
  name: 'VaultKeepComponent',
  props: {
    keepProp: {
      type: Object,
      default: () => {
        alert('this data does not exist')
      }
    }
  },
  setup(props) {
    const state = reactive({
      showEmail: false,
      dropOpen: false
    })
    return {
      state,
      keep: computed(() => props.keepProp),
      vaults: computed(() => AppState.vaults),
      selectProfile() {
        router.push({ name: 'PublicProfile', params: { id: props.keepProp.creatorId } })
      },
      setCurrentKeep(keep) {
        AppState.currentKeep = keep
      },
      removeVaultKeep(keep) {
        if (window.confirm('Are you sure you want to delete this vault?')) {
          vaultKeepService.deleteVaultKeep(keep)
        }
        // document.getElementById('closeModal').click()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.grid-item{
  -webkit-column-break-inside: avoid;
}
.add-vault-btn{
  border:rgb(0, 255, 179) 6px solid;
  padding: 1em;
}
.dropdown-menu {
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.dropdown-toggle{
  background: rgb(255, 255, 255);
}
.dropdown-toggle:hover {
  background: rgb(241, 241, 241);
}
#modal-info{
  position: absolute;
  bottom: 10px;
}
#title{
  position: relative;
  left:10px;
  bottom: 40px;
}

  #email{
    transform: scale(0);
    transition: all .15s linear .15s;
    font-family: 'Roboto', sans-serif;
//  transition: all 0.15s linear;
  }
  #profile-img{
    box-shadow:
    0 0 0 0 rgb(131, 131, 131),
    0 0 0 0 rgb(133, 133, 133);

  transition: box-shadow ease-in-out .15s;
  }
#profile-img-expanded:hover{
  #profile-img{
  box-shadow: 0 0 6px 6px rgb(163, 163, 163),
    0 0 6px 6px rgb(163, 163, 163);

  }
  #email{
    transform: scale(1);
  }
}
#profile-img:hover{
  opacity: 50%;

}
@media(max-width: 600px){
  #profile-img{
    height: 25%;
    width: 25%;
  }
  #title{
    font-size: 100%;
  }
  #email{
    display: none;
  }
}
#keep-img{
width: 100%;
}

#modal-img{
  height: 40vh;
  width: 35vh;
}
.modal-content{
  border: 0ch;
}
.modal-header{
  border: 0ch;
}
.modal-body{
  background-color: black;
  color: black;
  border-color: black;
}
.modal-footer{
  border: 0ch;
}
#keep-small{
  border-bottom: 2px solid rgb(206, 206, 206);
}
#keep-small:hover{
  background-color: rgba(241, 241, 241, 0.808);
}
#keep-small:active{
  background-color: rgba(190, 190, 190, 0.829);
}
</style>
