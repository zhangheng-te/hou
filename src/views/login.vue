<template>
  <div class="login-container">
    <el-card class="my-card">
      <img src="../assets/logo_wps.png" alt>
      <el-form status-icon>
        <el-form-item prop="mobile">
          <el-input placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="请输入密码" style="width:100%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {},
  methods: {}
}
</script>

<style lang='less'>
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../assets/login_bg.jpg) no-repeat center;
  background-size: 100% 100%;
  .my-card {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto 20px;
    }
  }
}
</style>
