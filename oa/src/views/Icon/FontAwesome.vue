<template>

 <div class="boddy">
<el-button type="primary" size="mini">+</el-button>
    <el-date-picker
  
    width="50%"
    v-model="value1"
     style="width: 35%"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      size="mini">
    </el-date-picker>
 <el-button  type="primary" size="mini">搜索</el-button>
  <el-table
    :data="tableData"
    border
    style="width: 93%">
   
      
 
   
  
    <el-table-column
      prop="name"
      label="发起人"
      width="80">
    </el-table-column>
     <el-table-column
      prop="time"
      label="开始时间"
      width="110">
    </el-table-column>
    <el-table-column
      prop="swsb"
      label="结束时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="swxb"
      label="天数"
      width="150">
    </el-table-column>
    <el-table-column
      prop="xwsb"
      label="原因"
      width="150">
    </el-table-column>
    <el-table-column
      prop="xwxb"
      label="类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="状态"
      width="150">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '通过' ? 'success' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>



  <el-table-column
      prop="xw"
      label="操作"
      width="100">
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
          name: '王小虎',
          time: '2020-06-16',
          swsb:"2020-06-16",
          swxb:"",
          xwsb:"",
          xwxb:"",
          tag:"待审核",
          xw:""
        },
       
        {
          name: '王小虎',
          time: '2020-06-16',
          swsb:" 2020-06-16",
          swxb:"",
          xwsb:"",
          xwxb:"",
          tag: '待审核',
          xw:""
        },
         {
          name: '王小虎',
          time: '2020-06-16',
          swsb:" 2020-06-16",
          swxb:"",
          xwsb:"",
          xwxb:"",
          tag: '通过',
          xw:""
        }
        ]
      }
    },
  
    
    
  
  }
</script>
<style scoped>
.boddy{
  background-color: white;
padding: 20px 0px 20px 30px;
}
</style>