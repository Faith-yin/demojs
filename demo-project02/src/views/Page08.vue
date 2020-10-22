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
      path: `https://qjdev-pred-files.oss-cn-beijing.aliyuncs.com/report_accounts_java/EMSSJUJ20201017104501647DGRiRGVZ.pdf`,
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