import { Toast } from '~/plugins/sweetalertMixins'
import errors from '~/mixins/errors'

export default {
  mixins: [errors],
  methods: {
    success(customText) {
      this.$swal({
        icon: 'success',
        title: customText ? customText : 'موفق!',
        ...Toast,
      })
    },
    error(customText) {
      this.$swal({
        icon: 'error',
        title: customText ? customText : 'ناموفق!',
        ...Toast,
      })
    },
    askQuestion(text, func) {
      this.$swal({
        title: `آیا برای ${text} مطمئن هستید؟ `,
        showCancelButton: true,
        cancelButtonText: 'خیر',
        confirmButtonText: 'بله',
      }).then((result) => {
        if (result.isConfirmed) {
          func()
        }
      })
    },
    askDeleteQuestion(func) {
      this.askQuestion('حذف', func)
    },
    askEditQuestion(func) {
      this.askQuestion('تغییر', func)
    },
    askAddQuestion(func) {
      this.askQuestion('افزودن', func)
    },
    handleReqError(err, redirect) {
      if (err) {
        this.$swal({
          icon: 'error',
          title: err.response.data.message
            ? this.handleErrors(err.response.data.message)
            : 'ناموفق !',
          ...Toast,
        })
      }

      if (redirect) this.$router.push(redirect)
    },
    handleSuccessMessage(redirect, customText) {
      this.$swal({
        icon: 'success',
        title: customText ? customText : 'موفق!',
        ...Toast,
      })

      if (redirect) this.$router.push(redirect)
    },
  },
}
