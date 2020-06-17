<template>

 <div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="idcard"
      label="id"
      width="60">
    </el-table-column>
     <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="80">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="80">
    </el-table-column>
    <el-table-column
      prop="phonenumber"
      label="手机号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="wechart"
      label="微信"
      width="150">
    </el-table-column>
    <el-table-column
      prop="qq"
      label="QQ"
      width="150">
    </el-table-column>
    <el-table-column
      prop="creattime"
      label="创建时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="creatstudy"
      label="创建人"
      width="100">
    </el-table-column>
  <el-table-column
      prop="operation"
      label="操作"
      width="150">
    <template >
      <el-button size="mini" icon="el-icon-search" circle></el-button>
        <el-button size="mini" type="primary">申领</el-button>
      </template>

    </el-table-column>
   
  </el-table> </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
         idcard:'0',
         name:'阿卡李',
         sex:'男',
         age:'20',
         phonenumber:'11111111',
         wechart:'11111111',
         qq:'11111111',
         creattime:'2020-06-17',
         creatstudy:'韦',
         operation:'申领'
        }
        ],
      }
    },
  
    
    
  
  }
</script>
<style scoped>

</style>