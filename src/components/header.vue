<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>

</script>
<style>
  .header_container{
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
  .avator{
    border-radius: 50%;
    margin-right: 37px;
    width: 36px;
    height: 36px;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
