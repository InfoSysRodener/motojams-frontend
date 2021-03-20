<template>
  <div 
    v-if="modal" 
    class="bg-black z-50 bg-opacity-50 fixed inset-0 flex justify-center items-center animated fadeIn faster"> 
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
  </div>
</template>
<script>
    export default {
        name: 'modal',
        props:{
            modal:{
                type:Boolean,
                default:false
            } 
        },
        data () {
            return {
            
            }
		},
		watch:{
			modal: function(){
			  document.documentElement.style.overflow = this.modal ? 'hidden' : 'auto';
			}
		},
		beforeDestroy(){
			document.documentElement.style.overflow = 'auto';
		}
    }
</script>
<style scoped>
        .animated {
			-webkit-animation-duration: 1s;
			animation-duration: 1s;
			-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
		}

		.animated.faster {
			-webkit-animation-duration:100ms;
			animation-duration: 100ms;
		}

		.fadeIn {
			-webkit-animation-name: fadeIn;
			animation-name: fadeIn;
		}

		.fadeOut {
			-webkit-animation-name: fadeOut;
			animation-name: fadeOut;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}

			to {
				opacity: 1;
			}
		}

		@keyframes fadeOut {
			from {
				opacity: 1;
			}

			to {
				opacity: 0;
			}
		}
</style>