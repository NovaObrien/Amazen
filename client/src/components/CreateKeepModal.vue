<template>
  <div class="create-keep-modal">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-warning font" data-toggle="modal" data-target="#keep-modal">
      Create Keep
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
                    Title
                  </h4>
                  <input class="rounded" id="title" type="text" placeholder="Title...">
                  <h4 class="text-dark">
                    ImgUrl
                  </h4>
                  <input class="rounded" id="title" type="text" placeholder="ImgUrl...">
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
                  />
                  <h4 class="text-dark">
                    Title
                  </h4>
                  <input class="rounded" id="title" type="text" placeholder="Title...">
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
input:focus {
    // outline: none !important;
    outline-color: rgb(0, 255, 179);
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
