export default {
  methods: {
    handleErrors(err) {
      switch (err) {
        case 'BLOG_POST_NOT_FOUND':
          return 'پست وبلاگ پیدا نشد!'
        case 'LESSON_NOT_FOUND':
          return 'درس پیدا نشد!'
        case 'CHAPTER_NOT_FOUND':
          return 'فصل پیدا نشد!'
        case 'SECTION_NOT_FOUND':
          return 'بخش پیدا نشد!'
        case 'CONTENT_NOT_FOUND':
          return 'محتوا پیدا نشد!'
        case 'CATEGORY_NOT_FOUND':
          return 'دسته بندی پیدا نشد!'
        default:
          return 'ناموفق!'
      }
    },
  },
}
