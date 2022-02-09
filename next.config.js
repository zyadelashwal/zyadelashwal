const path = require('path')
const nextTranslate = require("next-translate");


module.exports = {
  reactStrictMode: true,
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts:true,
  ...nextTranslate(),
  



}
