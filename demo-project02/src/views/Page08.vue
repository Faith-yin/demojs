<!--
 * @Date: 2020-10-12 13:46:32
 * @information: Blob
-->
<template>
  <div id="page08">



  </div>
</template>

<script>

export default {
  data() {
    return {
      path: `https://finance-images-test.oss-us-west-1.aliyuncs.com/h516031808960008776`,
    }
  },
  methods: {



  },
  async created() {


  let blob = new Blob(['Hello world'], {
    type: 'text/html,charset=UTF-8'   
  })
  console.log(blob)
  let objectURL = URL.createObjectURL(blob);
  console.log(objectURL)

  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = objectURL
  link.setAttribute('download', 'aa.txt')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)


  },
}
</script>

<style lang="scss">

</style>