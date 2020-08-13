<template>
  <section id="form__section--wrapper">
    <el-container>
      <el-row>
        <el-col :span="24">
          <el-form label-width="120px" class="form__content" prevent.default>
            <el-container>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="Company Name">
                    <el-input v-model="company.name"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="Owner">
                    <el-input v-model="company.owner"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Website">
                    <el-input v-model="company.website" placeholder="with www."></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Street">
                    <el-input v-model="company.address" placeholder="Address"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="City / Zip">
                    <el-input v-model="company.city"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item class="text-left">
                    <el-checkbox v-model="company.checked">With .html extension</el-checkbox>
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
      </el-row>
    </el-container>
  </section>
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
#form__section--wrapper {
  background: rgb(226, 232, 236);
}
</style>

