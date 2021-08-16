module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/assets/scss/_general.scss";
            @import "@/assets/scss/_normalize.scss";
            @import "@/assets/scss/_scrollbar.scss";
            @import "@/assets/scss/_vars.scss";
          `
        }
      }
    }
  }