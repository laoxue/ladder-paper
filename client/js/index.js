// 创建dom
function createDom(type) {
  return document.createElement(type);
}
// 终端
function showItem() {

  var b = document.body;
  var c = document.getElementById('ternimal');
  var a = c.getContext('2d');

  S = [
    "",
    "const NAME = '薛强';",
    "let age = 26;",
    "是一名前端开发工程师",
    "    ",
    "    S.forEach(function(v,i){",
    "        if(i <= lo){",
    "            if(i == lo) {v = v.substr(0, so);}",
    "            a.fillText(v, 50, 100+i*16);",
    "        }",
    "    });",
    "    ",
    "    a.fillRect(100 + a.measureText(S[lo].substr(0,so)).width, 102+lo*16 , 10 ,14);",
    "    ",
    "    so++;",
    "        if(so >= S[lo][ln]){ lo++; so = 0;}",
    "            if(lo * 16 > innerHeight-200){ a.translate(0 , -0.5); }",
    "                  if(lo >= S[ln] -1 ){ window.clearInterval(x); }",
    "},25);",
    "",
    "",
    "",
    "    ",
    "  "
  ]
  so = 0; fs = "fillStyle";
  lo = 1; ln = "length";

  c.width = W = innerWidth;
  c.height = H = S.length * 40;

  a.textBaseline = "top";
  a.font = "26px monospace";

  x = setInterval(function() {
    a.globalCompositeOperation = "source-over";
    a.shadowBlur = 0; a[fs] = "rgba(0,0,0,0.4)";
    a.fillRect(0, 0, W, H);
    a.shadowColor = "rgba(0,255,0,0.5)";
    a.shadowBlur = 8; a[fs] = "#060";
    a.globalCompositeOperation = "lighter";

    S.forEach(function(v, i) {
      if (i <= lo) {
        if (i == lo) { v = v.substr(0, so); }
        a.fillText(v, 40, 100 + i * 26);
      }
    });

    a.fillRect(100 + a.measureText(S[lo].substr(0, so)).width, 102 + lo * 26, 10, 14);

    so++;
    if (so >= S[lo][ln]) { lo++; so = 0; }
    if (lo * 26 > innerHeight - 200) { a.translate(0, -0.5); }
    if (lo >= S[ln] - 1) { window.clearInterval(x); }
  }, 25);
}
// 设置姓名 
function setName(f, l) {
  var nameDom = document.getElementsByClassName('shirt-text');
  var [firstName, lastName] = nameDom;
  firstName.innerHTML = f;
  lastName.innerHTML = l;
}

// 设置工作
function setWork(work) {
  work.forEach((item) => {
    console.log(item)
    var li = createDom('li');
    var b = createDom('b');
    b.className = item.point;
    var spanDate = createDom('span');
    spanDate.textContent = item.date;
    spanDate.style = "font-size: 33px;color:gray;"
    var spanLoc = createDom('span');
    spanLoc.textContent = item.location;
    var spanName = createDom('span');
    spanName.textContent = item.name;
    spanName.className = 'company';

    spanName.addEventListener('click', () => {
      document.querySelector('.showdialog').style.display = "block"
      var ul = createDom('ul');
      var root = document.querySelector('#zyzz')
      root.appendChild(ul);
      var { items, hole } = item.dialog;
      items.forEach((i) => {
        var li = createDom('li');
        li.textContent = i;
        ul.appendChild(li);
      })
      var div = createDom('div');
      div.textContent = hole;
      ul.appendChild(div);
    })

    li.appendChild(b);
    li.appendChild(spanDate);
    li.appendChild(spanLoc);
    li.appendChild(spanName);

    document.getElementById('time-horizontal').appendChild(li);
  })

}

// 设置矩形
function drawSkill(skill) {
  // 自定义带文本的矩形树图
  var _F = F2,
    Shape = _F.Shape,
    Util = _F.Util;
  var colorbox = ['rgb(249,89,48)', 'rgb(75,170,253)', 'rgb(255,210,92)', '#6699CC', 'rgb(22,166,73)', '#99CCCC', '#336699', '#FFCC33']
  var i = 0
  Shape.registerShape('polygon', 'labeledPolygon', {
    draw: function draw(cfg, container) {
      // console.log(cfg)
      var points = this.parsePoints(cfg.points);
      var style = Util.mix({
        fill: colorbox[i],
        points: points
      }, cfg.style);
      var polygon = container.addShape('Polygon', {
        className: 'polygon',
        attrs: style
      });
      // 在 polygon 的中心添加文本
      var text = container.addShape('Text', {
        // className: 'polygon',
        attrs: {
          x: (points[0].x + points[2].x) / 2,
          y: (points[0].y + points[2].y) / 2,
          text: cfg.origin._origin.name,
          fill: '#fff',
          textAlign: 'center',
          textBaseline: 'middle',
          fontSize: 12
        }
      });

      var polygonBBox = polygon.getBBox();
      var textBBox = text.getBBox();

      // 这里为了让文本显示全，根据文本和矩形框的宽度比来设置文本大小
      var ratio = polygonBBox.width / textBBox.width;
      text.attr('fontSize', ratio * 12 * 0.6);
      if (i >= colorbox.length) {
        i = 0;
      } else {
        i++;
      }

      return [polygon, text];
    }
  });


  var data = {
    name: '',
    children: skill
  };

  // setInterval(function() {
  //   data.children.map(function(item) {
  //     item.value = Math.random(0, 40)
  //   })
  //   chart.render();
  // }, 1500)
  var dv = new DataSet.DataView();
  dv.source(data, {
    type: 'hierarchy'
  }).transform({
    field: 'value',
    type: 'hierarchy.treemap',
    tile: 'treemapResquarify',
    color: 'red',
    as: ['x', 'y']
  });
  var nodes = dv.getAllNodes();
  nodes.map(function(node) {
    node.name = node.data.name;
    node.value = node.data.value;
    return node;
  });

  var chart = new F2.Chart({
    id: 'mountNode',
    padding: 20,
    pixelRatio: window.devicePixelRatio
  });
  chart.source(nodes);
  chart.scale({
    value: {
      nice: false
    }
  });
  chart.axis(false);
  chart.legend(false);
  chart.tooltip(false);
  chart.polygon().position('x*y').color('name').shape('labeledPolygon').style({
    lineWidth: 1,
    stroke: '#fff'
  });
  chart.render();


}
// 需要使用 @antv/data-set 对数据进行布局处理
window.onload = function() {
  document.querySelector('#changeTab')
    .addEventListener('click', () => {
      document.querySelector('.slip-page').className = 'ani-slp'
      showItem()
    })
  document.querySelector('.xxxx')
    .addEventListener('click', function() {
      document.querySelector('.showdialog').style.display = "none"
      document.querySelector('#zyzz').innerHTML = ''
    })
  console.log(datas);
  let { firstName: f, lastName: l, skill, work } = datas;
  // 设置名字
  setName(f, l);
  drawSkill(skill)
  console.log(work)
  setWork(work);
}

