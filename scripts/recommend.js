function resetForm() {
  event.preventDefault(); // 阻止默认的重置行为
  // 重置除了年龄和性别字段以外的其他字段
  // 取得所有复选框元素
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // 将所有复选框的选中状态设置为未选中
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
  document.getElementById("message").innerHTML = "";
}


$(document).ready(function () {
  $('.symptom-detail').hide();
  $('#' + "全身症状").show();
  // 当点击li中的a时
  $('#choose_cla li a').click(function (e) {
    e.preventDefault(); // 阻止默认的链接跳转行为

    // 移除当前选中的li的current-cla类
    $('#choose_cla li.current-cla').removeClass('current-cla');
    // 将点击的li添加current-cla类
    $(this).parent('li').addClass('current-cla');

    // 获取点击的li的文本内容
    var targetId = $(this).text();

    // 隐藏所有symptom-detail盒子
    $('.symptom-detail').hide();
    // 显示对应id的盒子
    $('#' + targetId).show();
  });
});


var symptom_data = [
  { "name": "竹蔗红罗卜猪骨汤", "class": "牙龈肿痛 咽干 口干 鼻干 心烦 痰多 小便不利" },
  { "name": "猪笼草赤小豆横脷汤", "class": "黄疸型肝炎 胃溃疡 十二指肠溃疡 尿路结石 高血压 高血脂 感冒 咳嗽" },
  { "name": "原盅炖北菇", "class": "便秘 痰多" },
  { "name": "芋干瘦肉汤", "class": "畏寒 痰多" },
  { "name": "椰子黄豆无花果田鸡汤", "class": "手脚冰冷 气血不足 消化不良 腹泻 水肿 小便不利 胸闷" },
  { "name": "鸭梨北杏鹅肉汤", "class": "咳嗽 支气管炎 胸闷 心烦 咽干 口干 痰粘" },
  { "name": "雪梨麻黄瘦肉汤", "class": "感冒 咳嗽 发热 咽痛 燥热 支气管炎 哮喘" },
  { "name": "新鲜霸王花猪展汤", "class": "咳嗽 痰多 支气管炎 颈淋巴腺结核 便秘" },
  { "name": "鲜茅根霸王花猪肺汤", "class": "皮肤湿疹 小便不利 焦虑 失眠 咳嗽" },
  { "name": "鲜莲子滚鸡肉汤", "class": "心悸 失眠 心烦" },
  { "name": "鲜橄榄煲海螺瘦肉汤", "class": "消化不良 咽痛" },
  { "name": "西洋参石斛淮山煲鸡", "class": "咳嗽 食少 干呕 视物不清 潮热 盗汗" },
  { "name": "西洋参淮山红枣清炖乳鸽", "class": "虚弱 疲劳 气短 咳嗽" },
  { "name": "西红柿滚咸猪肉汤", "class": "肠胃不适 口干 口腔溃疡 胃痛 腹胀 大便干 口腔溃烂 牙龈肿痛" },
  { "name": "五指毛桃煲瘦肉汤", "class": "支气管炎 食欲不振 气血不足 胃痛 慢性胃炎 产后少乳" },
  { "name": "无花果花生煲猪肚汤", "class": "消化不良 脾虚" },
  { "name": "无花果茶树菇山鸡汤", "class": "四肢不温 腹泻 腹痛 腰酸 眩晕 耳鸣" },
  { "name": "太子参无花果瘦肉汤", "class": "虚弱疲劳 气血不足 咳嗽 咽痛 口干 精力不济 痰液积聚" },
  { "name": "松子仁煲西洋参鲜鸡汤", "class": "皮肤干燥" },
  { "name": "双仁炖猪心汤", "class": "口干 咳嗽 燥热 心脏病 气血不足" },
  {
    "name": "使君子煲瘦肉汤", "class": "面色发黄 消化不良 腹胀 腹痛"
  },
  {
    "name": "石斛玉竹沙参煲瘦肉汤",
    "class": "咽干 口干 燥热 咳嗽 咳嗽 便秘 面色发黄 消化不良 腹胀 腹痛"
  },
  {
    "name": "石斛太子参煲瘦肉",
    "class": "手脚冰冷 腹胀 胃痛 食欲不振 口干 咳嗽 咽干 痰粘 精神疲倦 心悸 失眠"
  },
  {
    "name": "石斛杞子猪肝汤",
    "class": "视物不清 眼干 腰酸 口干"
  },
  {
    "name": "石斛麦冬瘦肉汽",
    "class": "腰酸 遗精 经少 眩晕 耳鸣 口干 心烦 失眠 消化不良"
  },
  {
    "name": "石斛淮山杞子猪骨汤",
    "class": "骨质疏松 肝肾阴亏 腰酸 眩晕 咳嗽 遗精"
  },
  {
    "name": "石斛冰糖茶",
    "class": "口干 咽干 胃痛 干呕 咳嗽"
  },
  {
    "name": "山萸肉芡实煲瘦肉",
    "class": "气血不足 食欲不振 眩晕 耳鸣 腰酸 失眠 遗精 精力不济 性功能减退"
  },
  {
    "name": "沙榄去耳煲猪展汤",
    "class": "咽痛"
  },
  {
    "name": "沙参玉竹薏仁猪脚筋汤",
    "class": "口干 咳嗽 燥热 水肿 皮肤干燥"
  },
  {
    "name": "去苓黄精生蚝汤",
    "class": "虚弱 疲劳 干咳 咳痰 腰酸 眩晕"
  },
  {
    "name": "清炖蚌肉",
    "class": "燥热 眩晕 视物不清 糖尿病"
  },
  {
    "name": "清补凉乳鸽汤",
    "class": "口腔溃疡 面红目赤 心悸 心烦 虚弱 形体消瘦 盗汗"
  },
  {
    "name": "芡实江珧柱猪粉肠汤",
    "class": "气血不足 咳嗽 痰多"
  },
  {
    "name": "杞子滚牛肝汤",
    "class": "免疫力低下 气血不足 眩晕 视物不清"
  },
  {
    "name": "苹果雪耳瘦肉汤",
    "class": "皮肤干燥 消化不良 便秘 咳嗽 喉咙疼痛"
  },
  {
    "name": "糯稻根太子参煲泥鳅鱼汤",
    "class": "消化不良 食欲不振 阳痿 早泄 肝火"
  },
  {
    "name": "糯稻根煲山斑鱼汤",
    "class": "消化不良 食欲不振 腰酸 眩晕 耳鸣 遗精 疲劳 肠胃不适"
  },
  {
    "name": "南北杏煲鳄鱼肉",
    "class": "阳痿 早泄 咳嗽 咳痰 咽干"
  },
  {
    "name": "木瓜墨鱼汤",
    "class": "肠胃不适 缺铁性气血不足 便秘"
  },
  {
    "name": "木瓜煲老鸭",
    "class": "消化不良 食欲不振 营养不良 口干 咽燥 口腔溃疡"
  },
  {
    "name": "明目补肝汤",
    "class": "眩晕 精神疲倦"
  },
  {
    "name": "绵茵陈煲鲫鱼汤",
    "class": "口干 咽干"
  },
  {
    "name": "蜜枣淮山西施骨汤",
    "class": "骨质疏松 消化不良 水肿 肥胖"
  },
  {
    "name": "蜜瓜海螺老鸡汤",
    "class": "皮肤干燥 腰酸 眩晕 耳鸣 遗精"
  },
  {
    "name": "眉豆花生玉米煲山斑鱼汤",
    "class": "咳嗽 高血压 糖尿病"
  },
  {
    "name": "眉豆花生红枣猪尾汤",
    "class": "脚气 消化不良 腹胀 腹痛"
  },
  {
    "name": "毛冬青杞子菟丝子煲瘦肉汤",
    "class": "糖尿病"
  },
  {
    "name": "猫爪草夏枯草煲瘦肉汤",
    "class": "肺结核"
  },
  {
    "name": "猫爪草煲瘦肉",
    "class": "甲状腺肿瘤 颈淋巴腺炎 淋巴结核"
  },
  {
    "name": "绿豆百合炖白鸽",
    "class": "中暑 咳嗽 咽干 消化不良"
  },
  {
    "name": "萝卜滚鳕鱼汤",
    "class": "风寒 惊悸少眠 食欲不振 皮肤干燥"
  },

  {
    "name": "龙利叶黄豆炖白鲫鱼",
    "class": "支气管炎 肺气肿"
  },
  {
    "name": "榴莲芯煲鲫鱼汤",
    "class": "小便频繁 虚汗"
  },
  {
    "name": "灵芝圆肉煲瘦肉汤",
    "class": "心烦 失眠 口干 咽干 肝硬化 血管硬化 高血压"
  },
  {
    "name": "灵芝煲猪肚",
    "class": "心神不宁 失眠 咳痰 食少"
  },
  {
    "name": "莲藕鲤鱼汤",
    "class": "营养不良 水肿"
  },
  {
    "name": "莲藕红豆白鸽汤",
    "class": "虚弱 消化不良 胸闷"
  },
  {
    "name": "栗子莲子猪腰汤",
    "class": "气血不足 营养不良 食少"
  },
  {
    "name": "栗子淮山猪蹄汤",
    "class": "肾虚疲劳 腰酸 气短"
  },
  {
    "name": "客家娘酒煲母鸡",
    "class": "阳痿 早泄 骨质疏松 关节炎 失眠 焦虑 神经衰弱"
  },
  {
    "name": "金婴子泽泻煲瘦肉汤",
    "class": "水肿 消化不良"
  },
  {
    "name": "黄芪南枣黄鳝汤",
    "class": "久泻 脱肛 子宫脱垂 慢性肾炎 体虚浮肿 疮口久不愈合"
  },
  {
    "name": "黄豆蚝豉排骨苦瓜汤",
    "class": "口腔溃烂 虚火 消化不良"
  },
  {
    "name": "淮山元肉炖水鱼",
    "class": "早泄 食欲不振 心悸 视物不清"
  },
  {
    "name": "淮山沙参玉竹鹅肉汤",
    "class": "消化不良 气短 心悸 眩晕"
  },
  {
    "name": "淮山莲子煲海龙",
    "class": "小便频繁 夜尿 虚汗"
  },
  {
    "name": "淮山党参鹌鹑汤",
    "class": "肠胃不适 食欲不振 消化不良 四肢"
  },
  {
    "name": "花生北芪红枣煲牛展",
    "class": "发育不良 形体消瘦"
  },
  {
    "name": "猴头菇白果鲨鱼骨汤",
    "class": "燥热 骨质疏松 消化不良"
  },
  {
    "name": "红罗卜排骨汤",
    "class": "骨质疏松 便秘"
  },
  {
    "name": "黑豆鲤鱼汤",
    "class": "腰酸 精神疲倦 营养不良 眩晕 心悸 失眠 气血不足 消化不良 便秘"
  },
  {
    "name": "核桃淮山芡实猪展汤",
    "class": "气血不足 消化不良 腹胀 腹痛 便秘"
  },
  {
    "name": "核桃淡菜番鸭汤",
    "class": "心悸 少眠 食欲不振"
  },
  {
    "name": "荷花荔枝干炖老鸭",
    "class": "中暑 淤血"
  },
  {
    "name": "橄榄响螺瘦肉汤",
    "class": "咽痛 咽干"
  },
  {
    "name": "浮小麦黑豆生蚝汤",
    "class": "盗汗"
  },
  {
    "name": "浮小麦参淮牛展汤",
    "class": "皮肤干燥"
  },
  {
    "name": "粉葛煲鱼汤",
    "class": "消化不良 腹胀 腹痛 高血压 糖尿病 胃溃疡"
  },
  {
    "name": "杜仲肉菘蓉煲猪骨汤",
    "class": "食少 积食 腹胀 消化不良 疲劳 腰酸 面色发黄"
  },
  {
    "name": "杜仲补骨脂排骨汤",
    "class": "骨质疏松 关节疼痛"
  },
  {
    "name": "独脚金煲瘦肉",
    "class": "消化不良 食欲不振 气血循环不畅 痛经 关节疼痛 肌肉酸痛"
  },
  {
    "name": "豆角干煲鲩鱼尾",
    "class": "食欲不振 消化不良 气血不足 阳痿 性欲减退"
  },
  {
    "name": "冬虫草珧柱猪展汤",
    "class": "失眠 肺气肿"
  },
  {
    "name": "冬虫草炖水鸭",
    "class": "咳嗽 虚弱"
  },
  {
    "name": "党参北芪茨实淮山煲瘦肉/山斑鱼汤",
    "class": "咽痛 咳嗽"
  },
  {
    "name": "党参百合猪肺",
    "class": "支气管炎"
  },
  {
    "name": "丹参四鸡炖冰糖",
    "class": "肝硬化 慢性肝炎"
  },
  {
    "name": "大地鱼瘦肉滚豆腐汤",
    "class": "性功能减退 腰酸"
  },
  {
    "name": "春砂仁煲猪肚",
    "class": "消化不良 食欲不振 腹胀 性功能减退 遗精 滑精 早泄 肠胃不适 腹泻 月经不调 不孕"
  },
  {
    "name": "春砂仁煲鲫鱼汤",
    "class": "消化不良 食欲不振 眩晕 耳鸣 遗精 疲劳 肠胃不适"
  },
  {
    "name": "川贝枇杷叶炖鳄鱼肉瘦肉汤",
    "class": "咽干 心烦"
  },
  {
    "name": "川贝北杏炖鳄鱼肉",
    "class": "哮喘 感冒 支气管炎 虚弱"
  },
  {
    "name": "陈皮炖老鸭",
    "class": "食欲不振 消化不良"
  },
  {
    "name": "百合西洋菜猪展生鱼汤",
    "class": "口干 咳嗽 痰多 口腔溃疡 口干"
  },
  {
    "name": "百合陈皮鲫鱼汤",
    "class": "咳嗽 咳痰 营养不良 消化不良"
  },
  {
    "name": "白果枝竹冬瓜老鸭汤",
    "class": "冠心病 高血压 动脉硬化 肺结核 白带发红 遗尿"
  },
  {
    "name": "白菜干豆腐腊鸭头汤",
    "class": "便秘 痔疮 结肠癌"
  },

]

// 在页面加载完成后执行代码
window.addEventListener('DOMContentLoaded', function () {
  // 获取表单
  const form = document.getElementById('myForm');


  // 添加表单提交事件监听器
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    document.getElementById("message").innerHTML = "";
    // 创建空数组用于存储选择的值
    const symptom = [];
    const matchedItems = []
    // 获取所有复选框
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // 将选中的复选框的值添加到symptom数组中
    checkboxes.forEach(function (checkbox) {
      symptom.push(checkbox.value);
    });

    symptom_data.forEach(function (item) {
      // 将 class 值按空格分割成数组
      const classes = item.class.split(" ");

      // 判断 symptom 数组中是否有任何一个值在 classes 数组中
      if (symptom.some(function (s) { return classes.includes(s); })) {
        matchedItems.push(item.name);
      }


      // 可以在这里进行进一步的处理或提交表单等操作
    });
    console.log(matchedItems)
    console.log(symptom)
    if (matchedItems.length > 0) {

      document.getElementById("message").innerHTML = "";
      var message = "";
      matchedItems.forEach(function (matchedItem) {
        const link = document.createElement("a");
        link.href = "药膳搜索.html?YSname=" + encodeURIComponent(matchedItem);
        link.textContent = matchedItem;
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          window.open(link.href); // Open link in a new tab
        });
        message += link.outerHTML + "<br>"; // 使用 outerHTML 获取 <a> 元素的 HTML
      });
      document.getElementById("message").innerHTML += message;
    }

  });
})