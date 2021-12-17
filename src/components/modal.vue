<template>
    <div class="modal-backdrop">
        <div class="modal">
            <!-- Header -->
            <div v-if="page == 1">
                <header class="modal-header">
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
                </header>
            </div>
            <div v-if="page == 2">
                <header class="modal-header">
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
                </header>
            </div>
            <div v-if="page == 3">
                <header class="modal-header">
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
                </header>
            </div>
            <div v-if="page == 4">
                <header class="modal-header">
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
                </header>
            </div>
            <div v-if="page == 5">
                <header class="modal-header">
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
                </header>
            </div>
            <div v-if="page == 6">
                <header class="modal-header">
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
                </header>
            </div>
            <div v-if="page == 7">
                <header class="modal-header">
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
                </header>
            </div>

            <!-- Body -->
            <div v-if="page == 1">
                <section class="modal-body">
                    <slot name="body">
                        This is the first body!
                    </slot>
                </section>
            </div>
            <div v-if="page == 2">
                <section class="modal-body">
                    <slot name="body">
                        This is the second body!
                    </slot>
                </section>
            </div>
            <div v-if="page == 3">
                <section class="modal-body">
                    <slot name="body">
                        This is the third body!
                    </slot>
                </section>
            </div>
            <div v-if="page == 4">
                <section class="modal-body">
                    <slot name="body">
                        This is the fourth body!
                    </slot>
                </section>
            </div>
            <div v-if="page == 5">
                <section class="modal-body">
                    <slot name="body">
                        This is the fifth body!
                    </slot>
                </section>
            </div>
            <div v-if="page == 6">
                <section class="modal-body">
                    <slot name="body">
                        This is the sixth body!
                    </slot>
                </section>
            </div>
            <div v-if="page == 7">
                <section class="modal-body">
                    <slot name="body">
                        This is the seventh body!
                    </slot>
                </section>
            </div>

            <!-- Footer -->
            <div v-if="page == 1">
                <footer class="modal-footer">
                    <slot name="footer">
                        
                    </slot>
                    <button
                    type="button"
                    class="btn-green"
                    @click="next"
                    >
                        Next
                    </button>
                </footer>
            </div>
            <div v-if="page !== 1 && page !==7 ">
                <footer class="modal-footer">
                    <slot name="footer">
                        
                    </slot>
                    <button
                    type="button"
                    class="btn-green"
                    @click="back"
                    >
                        Back
                    </button>
                    <button
                    type="button"
                    class="btn-green"
                    @click="next"
                    >
                        Next
                    </button>
                </footer>
            </div>
            <div v-if="page == 7">
                <footer class="modal-footer">
                    <slot name="footer">
                        
                    </slot>
                    <button
                    type="button"
                    class="btn-green"
                    @click="back"
                    >
                        Back
                    </button>
                    <button
                    type="button"
                    class="btn-green"
                    @click="close"
                    >
                        Finish
                    </button>
                </footer>
            </div>

        </div>
    </div>
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

<style>
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
</style>