<template>
  <div id="index">
    <Head></Head>
    <div>
      <ul>
        <li v-for="i in list">
          <time v-text="i.create_at"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
    import Head from '../components/header.vue'
    import Foot from '../components/footer.vue'
    export default {
        data() {
            return {
              list:[]
            }
        },
        created() {
          this.getData()
        },
        methods:{
          getData(){
            this.api.get('topics',null,res=>{
              this.list=res.data
            })
          }
        },
        components: { Head , Foot },
    }
</script>
<style>
</style>
