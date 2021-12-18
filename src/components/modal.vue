<template>
    <transition name="modal">
        <div class="modal-backdrop">
            <div class="model-container">

                <!-- Header -->
                <div v-if="page == 1">
                    <div class="modal-header">
                        <slot name="header">
                            This is the first page!
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                        >
                            x
                        </button>
                    </div>
                </div>
                <div v-if="page == 2">
                    <div class="modal-header">
                        <slot name="header">
                            This is the second page!
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                        >
                            x
                        </button>
                    </div>
                </div>
                <div v-if="page == 3">
                    <div class="modal-header">
                        <slot name="header">
                            This is the third page!
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                        >
                            x
                        </button>
                    </div>
                </div>
                <div v-if="page == 4">
                    <div class="modal-header">
                        <slot name="header">
                            This is the fourth page!
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                        >
                            x
                        </button>
                    </div>
                </div>
                <div v-if="page == 5">
                    <div class="modal-header">
                        <slot name="header">
                            This is the fifth page!
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                        >
                            x
                        </button>
                    </div>
                </div>
                <div v-if="page == 6">
                    <div class="modal-header">
                        <slot name="header">
                            This is the sixth page!
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                        >
                            x
                        </button>
                    </div>
                </div>
                <div v-if="page == 7">
                    <div class="modal-header">
                        <slot name="header">
                            This is the seventh page!
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                        >
                            x
                        </button>
                    </div>
                </div>

                <!-- Body -->
                <div v-if="page == 1">
                    <div class="modal-body">
                        <slot name="body">
                            This is the first body!
                        </slot>
                    </div>
                </div>
                <div v-if="page == 2">
                    <div class="modal-body">
                        <slot name="body">
                            This is the second body!
                        </slot>
                    </div>
                </div>
                <div v-if="page == 3">
                    <div class="modal-body">
                        <slot name="body">
                            This is the third body!
                        </slot>
                    </div>
                </div>
                <div v-if="page == 4">
                    <div class="modal-body">
                        <slot name="body">
                            This is the fourth body!
                        </slot>
                    </div>
                </div>
                <div v-if="page == 5">
                    <div class="modal-body">
                        <slot name="body">
                            This is the fifth body!
                        </slot>
                    </div>
                </div>
                <div v-if="page == 6">
                    <div class="modal-body">
                        <slot name="body">
                            This is the sixth body!
                        </slot>
                    </div>
                </div>
                <div v-if="page == 7">
                    <div class="modal-body">
                        <slot name="body">
                            This is the seventh body!
                        </slot>
                    </div>
                </div>

                <!-- Footer -->
                <div v-if="page == 1">
                    <div class="modal-footer">
                        <slot name="footer">
                            
                        </slot>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="next"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div v-if="page !== 1 && page !==7 ">
                    <div class="modal-footer">
                        <slot name="footer">
                            
                        </slot>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="back"
                        >
                            Back
                        </button>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="next"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div v-if="page == 7">
                    <div class="modal-footer">
                        <slot name="footer">
                            
                        </slot>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="back"
                        >
                            Back
                        </button>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="close"
                        >
                            Finish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Modal',
    data () {
        return {
            page: 1
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      next() {
          if (this.page < 8) {
            this.page++
          }
      },
      back() {
          if (this.page > 1) {
              this.page--
            }
      }
    },
  };
</script>


<style scoped>
.modal-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 64px 16px;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>



<!-- <style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style> -->