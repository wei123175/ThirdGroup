<template>

 <div class="boddy">
    <el-input v-model="input" placeholder="请输入姓名" size="mini" style="width:200px"></el-input>
 <el-button  type="primary" size="mini">搜索</el-button>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
   
      
 
   
  
    <el-table-column
      prop="name"
      label="照片"
      width="180">
    </el-table-column>
     <el-table-column
      prop="time"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="swsb"
      label="性别"
      width="80">
    </el-table-column>
    <el-table-column
      prop="swxb"
      label="年龄"
      width="80">
    </el-table-column>
    <el-table-column
      prop="xwsb"
      label="民族"
      width="60">
    </el-table-column>
    <el-table-column
      prop="xwxb"
      label="手机号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="sw"
      label="部门"
      width="170">
    </el-table-column>
    <el-table-column
      prop="zw"
      label="职位"
      width="170">
    </el-table-column>
  <el-table-column
      prop="xw"
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
          <el-button size="mini" type="danger" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
   
  </el-table> </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '王小虎',
          time: '王小虎',
          swsb:"男",
          swxb:"18",
          xwsb:"汉",
          xwxb:"155538884856",
          sw: '人资',
          zw:"员工",
         
        }],
        input:"",
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