<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-button type="primary" @click="dialogFormVisible = true">&nbsp; 新增 &nbsp;</el-button>
      <el-table  :data="tableData" border highlight-current-row style="width: 100%;margin-top: 10px;"   :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column fixed sortable property="date" label="注册日期" width="220"></el-table-column>
        <el-table-column fixed sortable property="name" label="用户名" width="220"></el-table-column>
        <el-table-column fixed sortable property="address" label="注册地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="Pagination" style="text-align: right;margin-top: 10px;">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      <el-dialog  width="30%" title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="form" >
          <el-form-item label="注册日期" :label-width="formLabelWidth"  prop="date">
            <el-date-picker
              v-model="form.date"
              type="date"
              style="width: 100%;"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="注册地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary"  @click="submitForm('form')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tableData: [],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          date:'',
          address:'',
        },
        rules:{
          date:{required: true,message:' ',trigger: 'blur' }
        },
      }
    },
    created(){
      this.findData();
    },
    methods:{
      findData(){
        var that=this;
        this.api.post('http://localhost:3000/user/find',{},function (d) {
            that.tableData=d;
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.api.post('http://localhost:3000/user/save',{name:'test',data:'2017-05-03',address:'广州市天河区'})
            this.findData();
            this.dialogFormVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style>
  .table_container{
    padding: 10px 20px;
  }
  .el-table td{
    padding: 9px 0px;
  }
</style>
