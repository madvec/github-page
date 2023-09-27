import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base:'/github-page/',
    plugins:[vue()]
})



// module.exports = { publicPath: process.env.NODE_ENV === 'production' ? '/github-page' : '/' }

// module.exports = {
//     publicPath: "/github-page",
// }

// module.exports = {
//     publicPath: "",
//     configureWebpack: {

//     }
// }