<template>
  <section class="document__wrapper">
    <el-container>
      <el-row>
        <el-col :span="24" class="text-left">
          <el-button type="success" @click="print">Save Image</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div ref="printMe" id="print__container">
            <h1>{{ title }}</h1>
            <div class="page__main--content">
              <p>
                <strong>Allgemeine Geschäftsbedingungen {{ companyInfo.name }} für Suchmaschinenoptimierung (SEO), Homepageerstellung / Homepagegestaltung, Google Places, und Adwords Optimierung / Betreuung Inhaber: {{ companyInfo.owner }}, {{ companyInfo.address }} {{ companyInfo.city }}, für Geschäftskunden.</strong>
              </p>
              <h4>I. Geltungsbereich</h4>1. Diese Geschäftsbedingungen sind zur Einsichtnahme auf unserer Homepage im Internet veröffentlicht
              <span
                v-if="companyInfo.checked"
              >({{ companyInfo.website }}/agb.html)</span>
              <span v-else>({{ companyInfo.website }}/agb)</span>
              <p>2. Auf Wunsch werden diese vor Vertragsabschluss zugesandt und sind Grundlage für sämtliche Angebote, Verträge, Lieferungen und Leistungen, die zwischen , , nachfolgend Dienstleister und deren Kunden, nachfolgend Auftraggeber, bei der Vermarktung des Produkts geschlossen werden.</p>
              <p>3. Die nachfolgenden Bedingungen gelten auch für zukünftige Geschäfte mit dem Auftraggeber, auch wenn keine nochmalige ausdrückliche Vereinbarung vereinbart wird.</p>
              <p>4. Der Auftraggeber erklärt seine gewerbliche Tätigkeit sobald er diese AGB akzeptiert.</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <img :src="output">
        </el-col>
      </el-row>
    </el-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: "Agb",
      value: "",
      output: null
    };
  },
  computed: {
    companyInfo() {
      return this.$store.state.companyInfo;
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL",
        backgroundColor: "#fff",
        width: 1200,
        windowWidth: 1200
      };
      this.output = await this.$html2canvas(el, options);
    }
  }
};
</script>
<style>
.page__main--content {
  text-align: left;
}
#print__container {
  padding: 40px;
}
</style>
