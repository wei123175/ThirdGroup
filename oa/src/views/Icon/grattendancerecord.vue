<template>

 <div>
 <el-button type="primary" size="mini">最近一个月</el-button>
  <el-button  type="primary" size="mini">最近一星期</el-button>
  <el-button  type="primary" size="mini">当天</el-button>


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
    style="width: 95%">
   
      
 
   
  
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
     <el-table-column
      prop="time"
      label="时间"
      width="110">
    </el-table-column>
    <el-table-column
      prop="swsb"
      label="上午上班"
      width="150">
    </el-table-column>
    <el-table-column
      prop="swxb"
      label="上午下班"
      width="150">
    </el-table-column>
    <el-table-column
      prop="xwsb"
      label="下午上班"
      width="150">
    </el-table-column>
    <el-table-column
      prop="xwxb"
      label="下午下班"
      width="150">
    </el-table-column>
    <el-table-column
      prop="sw"
      label="上午"
      width="150">
    </el-table-column>
  <el-table-column
      prop="xw"
      label="下午"
      width="150">
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
          swsb:"",
          swxb:"",
          xwsb:"",
          xwxb:"",
          sw: '',
          xw:""
        }],
         value1: '',
      }
    },
  
    
    
  
  }
</script>
<style scoped>

</style>