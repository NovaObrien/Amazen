<template>
  <div class="create-keep-modal">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary font" data-toggle="modal" data-target="#exampleModalCenter">
      CreateKeepModal
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
            <h1 class="modal-title text-dark" id="exampleModalCenterTitle">
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
                    Title
                  </h4>
                  <input class="rounded" id="title" type="text" placeholder="Title...">

                  <div class="form-check">
                    <label class="form-check-label mt-5">
                      <input type="checkbox" class="form-check-input" name="optradio">
                      <h5>Private?</h5>
                      <h6 id="subnote">Private Keeps can only be seen by you</h6>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateKeepModal',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
#modal{
  border:rgb(0, 255, 179) 6px solid;
}
#title{
  font-size: 80%;
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
