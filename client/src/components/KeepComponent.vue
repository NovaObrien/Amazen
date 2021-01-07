<template>
  <div class="keep-component">
    <div class="grid-item container-fluid rounded-lg px-3 pt-3" data-toggle="modal" :data-target="'.bd-example-modal-xl'+keep.id" id="keep-small">
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
          <div class="modal-header bg-dark">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body bg-primary">
            <div class="row">
              <div class="col-5">
                <img class="rounded" id="modal-img" :src="keep.img" alt="">
              </div>
            </div>

            <div class="modal-footer bg-dark">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <!-- <button type="button" class="btn btn-primary">
              Save changes
            </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  name: 'KeepComponent',
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
      showEmail: false
    })
    return {
      state,
      keep: computed(() => props.keepProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
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
  border-color: black;
}
.modal-body{
  background-color: black;
  color: black;
  border-color: black;
}
.modal-footer{
  border-color: black;
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
