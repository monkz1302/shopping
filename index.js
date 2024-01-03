//商品列表， 依照img, alt, 商品簡介順序存放
var commodity = [
  ["img/clothing1.jpg", "clothing1", "衣服樣式一"],
  ["img/clothing2.jpg", "clothing2", "衣服樣式二"],
  ["img/clothing3.jpg", "clothing3", "衣服樣式三"],
  ["img/clothing4.jpg", "clothing4", "衣服樣式四"],
  ["img/clothing5.jpg", "clothing5", "衣服樣式五"],
  ["img/earphone1.jpg", "earphone1", "耳機樣式一"],
  ["img/earphone2.jpg", "earphone2", "耳機樣式二"],
  ["img/earphone3.jpg", "earphone3", "耳機樣式三"],
  ["img/earphone4.jpg", "earphone4", "耳機樣式四"],
  ["img/earphone5.jpg", "earphone5", "耳機樣式五"],
  ["img/eating1.jpg", "eating1", "食物樣式一"],
  ["img/eating2.jpg", "eating2", "食物樣式二"],
  ["img/eating3.jpg", "eating3", "食物樣式三"],
  ["img/eating4.jpg", "eating4", "食物樣式四"],
  ["img/eating5.jpg", "eating5", "食物樣式五"],
  ["img/laptop1.jpg", "laptop1", "筆電樣式一"],
  ["img/laptop2.jpg", "laptop2", "筆電樣式二"],
  ["img/laptop3.jpg", "laptop3", "筆電樣式三"],
  ["img/laptop4.jpg", "laptop4", "筆電樣式四"],
  ["img/laptop5.jpg", "laptop5", "筆電樣式五"],
  ["img/table1.jpg", "table1", "桌子樣式一"],
  ["img/table2.jpg", "table2", "桌子樣式二"],
  ["img/table3.jpg", "table3", "桌子樣式三"],
  ["img/table4.jpg", "table4", "桌子樣式四"],
  ["img/table5.jpg", "table5", "桌子樣式五"],
];

window.onload = function () {
  /* 
商品列表html標籤
<figure class="featured">
<img src="img/clothing1.jpg" alt="clothing1" />
<figcaption>衣服樣式一</figcaption>
</figure> 
*/
  var oDiv = document.getElementsByClassName("portfolio");
  var len = commodity.length;
  for (var i = 0; i < len; i++) {
    var oFigure = document.createElement("figure");
    oFigure.className = "featured";
    var oImg = document.createElement("img");
    oImg.src = commodity[i][0];
    oImg.alt = commodity[i][1];
    var oFigcaption = document.createElement("figcaption");
    var oFigcap_text = document.createTextNode(commodity[i][2]);
    oFigcaption.appendChild(oFigcap_text);
    oFigure.appendChild(oImg);
    oFigure.appendChild(oFigcaption);
    oDiv[0].appendChild(oFigure);
  }
};
