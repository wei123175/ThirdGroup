<template>

 <div class="boddy">
<el-button type="primary" size="mini">+</el-button>

  <el-table
    :data="tableData"
    border
    style="width: 90%">
   
      
 
   
  
    <el-table-column
      prop="name"
      label="id"
      width="120">
    </el-table-column>
     <el-table-column
      prop="time"
      label="用户组名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="swsb"
      label="权限"
      width="624">
    </el-table-column>
  <el-table-column
      prop="xw"
      label="操作"
      width="120">
      <template>
            
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
   
  </el-table> </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '13',
          time: '007',
          swsb:"部门",
          swxb:"50",
         
        },
        {
          name: '13',
          time: '007',
          swsb:"部门",
          swxb:"50",
         
        },
        {
          name: '13',
          time: '007',
          swsb:"部门",
          swxb:"50",
         
        },
       
        
        ]
      }
    },
  
    
    
  
  }
</script>
<style scoped>
.boddy{
  background-color: white;
  padding: 20px 30px;
}
</style>