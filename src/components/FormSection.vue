<template>
  <el-container>
    <el-row>
      <el-col :span="24">
        <el-form ref="form" v-model="form" label-width="120px" class="form__content">
          <el-form-item label="Firma">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Inhaber">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Webseite">
            <el-input v-model="form.name" placeholder="mit www."></el-input>
          </el-form-item>
          <el-form-item label="Straße">
            <el-input v-model="form.name" placeholder="Straße, Hausnummer und Plz"></el-input>
          </el-form-item>
          <el-form-item label="Stadt">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
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
<style>
.form__content {
  padding-top: 50px;
}
</style>

