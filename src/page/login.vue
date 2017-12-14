<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" >
        <div class="manage_tip">
          <p>知乎日报</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitLogin('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              loginForm: {
                username: '',
                password:'',
              },
              rules:{
                username:[{required: true,message:' ',trigger: 'blur' }],
                password:[{required: true,message:' ',trigger: 'blur' }],
              },
            }
        },
        methods:{
            submitLogin(formname){
              this.$refs[formname].validate((valid) => {
                if (valid) {
                  this.api.login(this.loginForm,(res)=> {
                    if(res.errcode==-1){
                      this.$message({
                        type: 'error',
                        message: res.msg
                      });
                    }else{
                      this.$message({
                        type: 'success',
                        message: '登录成功'
                      });
                    }
                  })
                } else {

                }
              });
            }

        }
    }
</script>
<style>
  .login_page{
    background-color: #3c3c3c;
  }
  .manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
  }
  p{
    font-size: 34px;
    color: #fff;
  }
  .form_contianer{
    width: 320px;
    height: 190px;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -95px;
    margin-left: -160px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
  }
  .submit_btn{
    width: 100%;
    font-size: 16px;
  }
</style>
