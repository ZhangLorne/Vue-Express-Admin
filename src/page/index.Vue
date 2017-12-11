<template>
  <div class="fillcontain">
    <el-container style="height: 100%">
      <el-aside>
        <el-row class="tac" style="height: 100%;">
          <el-col :span="24" style="min-height: 100%; background-color: #263238">
            <el-menu
              default-active="2"
              style="min-height: 100%;"
              background-color="#263238"
              text-color="rgb(210, 218, 224)"
              active-text-color="#20a0ff"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item v-for="d in list">
                <i :class="d.icon"></i>
                <span>{{ d.text }}</span>
              </el-menu-item>
              <!--<el-menu-item index="1">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>导航一</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="2">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">导航二</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="3">-->
                <!--<i class="el-icon-setting"></i>-->
                <!--<span slot="title">导航三</span>-->
              <!--</el-menu-item>-->
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <MyHeader></MyHeader>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
    import MyMenu from '../components/menu.vue'
    import MyHeader from '../components/header.vue'
    export default {
        data () {
          return {
            list:[],
            activeIndex: '1',
            activeIndex2: '1'
          }
        },
        created () {
          this.getMenu()
          console.log(this.list)
        },
        methods: {
          getMenu() {
            this.api.get('menu/get',null, r => {
              this.list = r;
            })
          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        components:{MyMenu,MyHeader}
    }
</script>
<style>
  .el-menu{
    border-right: 1px solid rgb(38, 50, 56);
  }
</style>
