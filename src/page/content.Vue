<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text="dat.title"></h2>
    <p>作者：{{dat.author.loginname}}　　发表于：{{dat.create_at}}</p>
    <hr>
    <article v-html="dat.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in dat.replies">
        <p>评论者：{{i.author.loginname}}　　评论于：{{i.create_at}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
  </div>
</template>
<script>
  import myHeader from '../components/header.vue'
  import myFooter from '../components/menu.vue'
  export default {
    components: { myHeader, myFooter },
    data () {
      return {
        id: this.$route.params.id,
        dat: {}
      }
    },
    created () {
      this.getDatagg()
    },
    methods: {
      getDatagg () {
        this.api.get('topic/' + this.id, null, r => {
          this.dat = r.data;
        })
      }
    }
  }
</script>
