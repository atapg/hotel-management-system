import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const options = {
	confirmButtonColor: '#0984e3',
	cancelButtonColor: '#E55039',
}

Vue.use(VueSweetalert2, options)
