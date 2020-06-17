<template>

 <div class="boddy">
<el-button type="primary" size="mini">+</el-button>
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
      width="170">
    </el-table-column>
    <el-table-column
      prop="creatstudy"
      label="创建人"
      width="100">
    </el-table-column>
  <el-table-column
      prop="operation"
      label="操作"
      width="100">
      <template>
            
             <el-button size="mini" icon="el-icon-search" circle></el-button>
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
          <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
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
         operation:''
        },
        {
         idcard:'1',
         name:'阿卡李',
         sex:'男',
         age:'20',
         phonenumber:'11111111',
         wechart:'11111111',
         qq:'11111111',
         creattime:'2020-06-17',
         creatstudy:'韦',
         operation:''
        },
        {
         idcard:'2',
         name:'阿卡李',
         sex:'男',
         age:'20',
         phonenumber:'11111111',
         wechart:'11111111',
         qq:'11111111',
         creattime:'2020-06-17',
         creatstudy:'韦',
         operation:''
        }
        ],
      }
    },
  
    
    
  
  }
</script>
<style scoped>
.boddy{
  background-color: white;
  padding-top: 20px;
  padding-left: 30px;
  padding-bottom: 30px;
}
</style>