// 百度统计代码 用于站点部署
// 只在build:site开启
export const hmScript = `<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?384d6046e02f6ac4ea075357bd0e9b43";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
`;
