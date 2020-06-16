<template>
  <el-table
    :data="tableData"
    border
    style="width: 90%">
  
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
     <el-table-column
      prop="gender"
      label="性别"
      width="80">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="80">
    </el-table-column>
    <el-table-column
      prop="numner"
      label="手机号"
      width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="250">
    </el-table-column>
    <el-table-column
      prop="weixin"
      label="微信">
    </el-table-column>
    <el-table-column
      prop="qier"
      label="QQ">
    </el-table-column>
   <el-table-column label="操作" width="150">
      <template>
            <el-button size="mini" icon="el-icon-search" circle></el-button>
            <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
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
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          gender: '男',
          name: '王小虎',
          age:"20",
          numner:"1558848563",
          weixin:"17630100931",
          qier:"2253939578",
          address: '上海市普陀区金沙江路 1518 弄',
          chang:"改变"
        }]
      }
    }
  }
</script>