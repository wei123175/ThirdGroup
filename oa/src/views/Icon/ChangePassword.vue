<template>

<div class="bodyy">
<div>
  <p>修改密码</p>
</div>
<div class="textt">
  当前密码：&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="请输入密码" style="width:200px" size="mini">当前密码</el-input>
</div>

<div class="textt">
  新密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="请输入密码" style="width:200px" size="mini">当前密码</el-input>
</div>
<div class="textt">
  确认新密码：<el-input v-model="input" placeholder="请输入密码" style="width:200px" size="mini">当前密码</el-input>
</div>
<div class="textt">
  <el-button type="primary" size="mini">修改</el-button>
</div>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      input:"",
    }
  },
}
</script>
<style scoped>
.textt{
  margin-top: 10px;
}
.bodyy{
  width: 100%;
  background-color: white;
  padding: 20px 30px;
}
</style>
