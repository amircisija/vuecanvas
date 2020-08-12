<template>
  <el-container>
    <el-row>
      <el-col span="24">
        <div class="grid-content bg-purple-dark">
          <el-form ref="form" v-model="form" label-width="120px">
            <el-form-item label="Activity name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: "FormSection",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

