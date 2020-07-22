/*
 * @Date: 2020-07-16 18:15:39
 * @information:
 */
export default {
  data() {
    return {
      cc: '这是混入进去的数据page13-01'
    }
  },
  methods: {
    fun03() {},
  },
  created() {
    console.log('这是created中page13-01混入的函数')
  },
  mounted() {
    console.log('这是mounted中page13-01混入的函数')
  }
}
