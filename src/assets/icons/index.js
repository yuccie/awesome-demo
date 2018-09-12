import Vue from 'vue';
import SvgIcon from 'components/svgIcon/index.vue'; // svg组件
import generateIconsView from './generateIconsView';


// register globally
Vue.component('svg-icon', SvgIcon);
// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./svg', false, /\.svg$/);
const iconMap = requireAll(req);

generateIconsView.generate(iconMap);
