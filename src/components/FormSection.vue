<template>
  <el-container>
    <el-row>
      <el-col :span="24">
        <el-form label-width="120px" class="form__content" prevent.default>
          <el-container>
            <el-row>
              <el-col :span="12">
                <el-form-item label="Firma">
                  <el-input v-model="company.name"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="Inhaber">
                  <el-input v-model="company.owner"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Webseite">
                  <el-input v-model="company.website" placeholder="mit www."></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Straße">
                  <el-input v-model="company.address" placeholder="Straße, Hausnummer und Plz"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Stadt">
                  <el-input v-model="company.city"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item class="text-left">
                  <el-checkbox v-model="company.checked">Mit .html</el-checkbox>
                </el-form-item>
              </el-col>
              <el-col :span="24" class="text-left">
                <el-form-item class="text-left">
                  <el-button type="primary" @click="onSubmit(company)">Add Company Info</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-container>
        </el-form>
      </el-col>
      <el-col>{{ companyInfo }}</el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: "FormSection",
  data() {
    return {
      company: {
        name: "",
        owner: "",
        website: "",
        address: "",
        city: "",
        checked: false
      }
    };
  },
  computed: {
    companyInfo() {
      return this.$store.state.companyInfo;
    }
  },
  methods: {
    onSubmit(company) {
      console.log("submit!");
      console.log(company);
      this.$store.dispatch("addCompany", this.company);
    }
  }
};
</script>
<style>
.form__content {
  padding-top: 50px;
}
.text-left {
  text-align: left;
}
</style>

