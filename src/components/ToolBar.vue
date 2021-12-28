<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
 
}
</script>

// scope : 해당 컴포넌트에만 적용 되는 스타일 속성
<style scoped>
  .header{
    color: white;
    background-color: #42b883 ;
    display: flex;
    padding: 8px;
  }

  .header .router-link-exact-active {
    color: #35495E;
  }

  .header a {
    color: white;
  }
</style>