/*
 * @Date: 2020-07-16 18:12:07
 * @information:
 */
export default {
  data() {
    return {
      bb: '这是混入进去的数据page13'
    }
  },
  methods: {
    fun02() {},
  },
  created() {
    console.log('这是created中page13混入的函数')
  },
  mounted() {
    console.log('这是mounted中page13混入的函数')
  }
}
