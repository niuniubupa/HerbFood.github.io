$(document).ready(function () {
  var menuData = [
    { 'name': '淮山党参鹌鹑汤', 'data': [{ 'value': 15, 'name': '党参' }, { 'value': 15, 'name': '淮山' }, { 'value': 200, 'name': '鹌鹑' }, { 'value': 250, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '五指毛桃煲瘦肉汤', 'data': [{ 'value': 250, 'name': '瘦肉' }, { 'value': 20, 'name': '五指毛桃' }, { 'value': 20, 'name': '姜' }] },
    { 'name': '客家娘酒煲母鸡', 'data': [{ 'value': 650, 'name': '客家娘酒' }, { 'value': 800, 'name': '光鸡' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '山萸肉芡实煲瘦肉', 'data': [{ 'value': 100, 'name': '山茱萸' }, { 'value': 50, 'name': '芡实' }, { 'value': 150, 'name': '瘦肉' }] },
    { 'name': '百合西洋菜猪展生鱼汤', 'data': [{ 'value': 50, 'name': '百合' }, { 'value': 500, 'name': '西洋菜' }, { 'value': 24, 'name': '蜜枣' }, { 'value': 400, 'name': '生鱼' }, { 'value': 300, 'name': '猪展' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '清补凉乳鸽汤', 'data': [{ 'value': 20, 'name': '淮山' }, { 'value': 20, 'name': '芡实' }, { 'value': 15, 'name': '杞子' }, { 'value': 15, 'name': '沙参' }, { 'value': 15, 'name': '玉竹' }, { 'value': 24, 'name': '红枣' }, { 'value': 400, 'name': '乳鸽' }, { 'value': 150, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '独脚金煲瘦肉', 'data': [{ 'value': 40, 'name': '独脚金' }, { 'value': 120, 'name': '瘦肉' }] },
    { 'name': '太子参无花果瘦肉汤', 'data': [{ 'value': 20, 'name': '太子参' }, { 'value': 50, 'name': '无花果' }, { 'value': 12, 'name': '蜜枣' }, { 'value': 400, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '春砂仁煲猪肚', 'data': [{ 'value': 15, 'name': '春砂仁' }, { 'value': 200, 'name': '猪肚' }] },
    { 'name': '春砂仁煲鲫鱼汤', 'data': [{ 'value': 3, 'name': '春砂仁' }, { 'value': 250, 'name': '鲫鱼' }] },
    { 'name': '栗子淮山猪蹄汤', 'data': [{ 'value': 50, 'name': '板栗' }, { 'value': 50, 'name': '淮山' }, { 'value': 24, 'name': '红枣' }, { 'value': 600, 'name': '猪蹄' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '白菜干豆腐腊鸭头汤', 'data': [{ 'value': 75, 'name': '白菜干' }, { 'value': 400, 'name': '豆腐' }, { 'value': 25, 'name': '芡实' }, { 'value': 25, 'name': '薏苡仁' }, { 'value': 24, 'name': '蜜枣' }, { 'value': 5, 'name': '陈皮' }, { 'value': 300, 'name': '腊鸭头' }, { 'value': 300, 'name': '鸭肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '粉葛煲鱼汤', 'data': [{ 'value': 750, 'name': '粉葛' }, { 'value': 500, 'name': '鲮鱼' }] },
    { 'name': '猪笼草赤小豆横脷汤', 'data': [{ 'value': 20, 'name': '赤小豆' }, { 'value': 15, 'name': '薏苡仁' }, { 'value': 20, 'name': '眉豆' }, { 'value': 20, 'name': '白扁豆' }, { 'value': 12, 'name': '蜜枣' }, { 'value': 300, 'name': '猪横脷' }] },
    { 'name': '浮小麦参淮牛展汤', 'data': [{ 'value': 25, 'name': '浮小麦' }, { 'value': 25, 'name': '党参' }, { 'value': 25, 'name': '淮山' }, { 'value': 25, 'name': '桂圆' }, { 'value': 600, 'name': '牛展' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '绵茵陈煲鲫鱼汤', 'data': [{ 'value': 250, 'name': '绵茵陈' }, { 'value': 500, 'name': '鲫鱼' }] },
    { 'name': '金婴子泽泻煲瘦肉汤', 'data': [{ 'value': 12, 'name': '金婴子' }, { 'value': 12, 'name': '泽泻' }, { 'value': 300, 'name': '瘦肉' }] },
    { 'name': '陈皮炖老鸭', 'data': [{ 'value': 10, 'name': '陈皮' }, { 'value': 2000, 'name': '老鸭' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '木瓜煲老鸭', 'data': [{ 'value': 1000, 'name': '木瓜' }, { 'value': 2000, 'name': '老鸭' }] },
    { 'name': '淮山沙参玉竹鹅肉汤', 'data': [{ 'value': 30, 'name': '淮山' }, { 'value': 15, 'name': '沙参' }, { 'value': 15, 'name': '玉竹' }, { 'value': 250, 'name': '鹅肉' }, { 'value': 250, 'name': '猪瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '黑豆鲤鱼汤', 'data': [{ 'value': 60, 'name': '黑豆' }, { 'value': 600, 'name': '鲤鱼' }, { 'value': 3, 'name': '陈皮' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '百合陈皮鲫鱼汤', 'data': [{ 'value': 80, 'name': '百合' }, { 'value': 5, 'name': '陈皮' }, { 'value': 300, 'name': '鲫鱼' }, { 'value': 200, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '南北杏煲鳄鱼肉', 'data': [{ 'value': 15, 'name': '南杏' }, { 'value': 15, 'name': '北杏' }, { 'value': 150, 'name': '鳄鱼肉' }] },
    { 'name': '木瓜墨鱼汤', 'data': [{ 'value': 500, 'name': '木瓜' }, { 'value': 500, 'name': '鲜墨鱼' }, { 'value': 300, 'name': '排骨' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '糯稻根煲山斑鱼汤', 'data': [{ 'value': 30, 'name': '北芪' }, { 'value': 30, 'name': '糯稻根' }, { 'value': 500, 'name': '山斑鱼' }] },
    { 'name': '豆角干煲鲩鱼尾', 'data': [{ 'value': 100, 'name': '豆角干' }, { 'value': 300, 'name': '鲩鱼尾' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '糯稻根太子参煲泥鳅鱼汤', 'data': [{ 'value': 25, 'name': '糯稻根' }, { 'value': 15, 'name': '太子参' }, { 'value': 250, 'name': '泥鳅鱼' }] },
    { 'name': '云苓黄精生蚝汤', 'data': [{ 'value': 20, 'name': '云苓' }, { 'value': 20, 'name': '黄精' }, { 'value': 48, 'name': '红枣' }, { 'value': 300, 'name': '鲜生蚝' }, { 'value': 350, 'name': '鸡肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '双仁炖猪心汤', 'data': [{ 'value': 12, 'name': '酸枣仁' }, { 'value': 20, 'name': '柏子仁' }, { 'value': 10, 'name': '桂圆' }, { 'value': 400, 'name': '猪心' }] },
    { 'name': '大地鱼瘦肉滚豆腐汤', 'data': [{ 'value': 150, 'name': '大地鱼' }, { 'value': 150, 'name': '瘦肉' }, { 'value': 200, 'name': '豆腐' }, { 'value': 20, 'name': '江珧柱' }, { 'value': 40, 'name': '姜' }, { 'value': 30, 'name': '生葱' }] },
    { 'name': '沙参玉竹薏苡仁猪脚筋汤', 'data': [{ 'value': 25, 'name': '玉竹' }, { 'value': 25, 'name': '沙参' }, { 'value': 10, 'name': '薏苡仁' }, { 'value': 250, 'name': '猪脚筋' }, { 'value': 250, 'name': '排骨' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '雪梨麻黄瘦肉汤', 'data': [{ 'value': 12, 'name': '南杏' }, { 'value': 12, 'name': '北杏' }, { 'value': 400, 'name': '雪梨' }, { 'value': 8, 'name': '麻黄' }, { 'value': 200, 'name': '瘦肉' }, { 'value': 12, 'name': '蜜枣' }] },
    { 'name': '苹果雪耳瘦肉汤', 'data': [{ 'value': 20, 'name': '雪耳' }, { 'value': 300, 'name': '苹果' }, { 'value': 8, 'name': '麻黄' }, { 'value': 200, 'name': '瘦肉' }, { 'value': 18, 'name': '蜜枣' }] },
    { 'name': '鲜橄榄煲海螺瘦肉汤', 'data': [{ 'value': 300, 'name': '海螺' }, { 'value': 500, 'name': '瘦肉' }, { 'value': 150, 'name': '新鲜橄榄' }] },
    { 'name': '龙利叶黄豆炖白鲫鱼', 'data': [{ 'value': 100, 'name': '黄豆' }, { 'value': 20, 'name': '龙利叶' }, { 'value': 400, 'name': '白鲫鱼' }] },
    { 'name': '冬虫草炖水鸭', 'data': [{ 'value': 4, 'name': '冬虫草' }, { 'value': 150, 'name': '水鸭' }] },
    { 'name': '猴头菇白果鲨鱼骨汤', 'data': [{ 'value': 50, 'name': '猴头菇' }, { 'value': 25, 'name': '白果' }, { 'value': 25, 'name': '莲子' }, { 'value': 25, 'name': '淡菜' }, { 'value': 150, 'name': '鲨鱼骨' }, { 'value': 500, 'name': '鲜鸡肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '黄豆蚝豉排骨苦瓜汤', 'data': [{ 'value': 80, 'name': '蚝豉' }, { 'value': 100, 'name': '黄豆' }, { 'value': 0, 'name': '苦瓜一条' }, { 'value': 500, 'name': '排骨' }] },
    { 'name': '红罗卜排骨汤', 'data': [{ 'value': 750, 'name': '红罗卜' }, { 'value': 500, 'name': '排骨' }, { 'value': 18, 'name': '蜜枣' }, { 'value': 3, 'name': '陈皮' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '鲜莲子滚鸡肉汤', 'data': [{ 'value': 200, 'name': '鲜莲子' }, { 'value': 100, 'name': '草菇' }, { 'value': 80, 'name': '丝瓜' }, { 'value': 200, 'name': '鸡肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '西洋参淮山红枣清炖乳鸽', 'data': [{ 'value': 30, 'name': '西洋参' }, { 'value': 60, 'name': '淮山' }, { 'value': 36, 'name': '红枣' }, { 'value': 200, 'name': '乳鸽' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '绿豆百合炖白鸽', 'data': [{ 'value': 30, 'name': '绿豆' }, { 'value': 15, 'name': '百合' }, { 'value': 10, 'name': '花旗参' }, { 'value': 400, 'name': '白鸽' }] },
    { 'name': '花生北芪红枣煲牛展', 'data': [{ 'value': 100, 'name': '花生' }, { 'value': 15, 'name': '北芪' }, { 'value': 36, 'name': '红枣' }, { 'value': 400, 'name': '牛展' }] },
    { 'name': '荷花荔枝干炖老鸭', 'data': [{ 'value': 40, 'name': '鲜荷花' }, { 'value': 100, 'name': '荔枝干' }, { 'value': 750, 'name': '光老鸭' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '石斛淮山杞子猪骨汤', 'data': [{ 'value': 25, 'name': '石斛' }, { 'value': 50, 'name': '淮山' }, { 'value': 25, 'name': '杞子' }, { 'value': 10, 'name': '陈皮' }, { 'value': 500, 'name': '猪骨' }] },
    { 'name': '石斛冰糖茶', 'data': [{ 'value': 15, 'name': '石斛' }, { 'value': 5, 'name': '冰糖' }] },
    { 'name': '石斛麦冬瘦肉汽', 'data': [{ 'value': 250, 'name': '瘦肉' }, { 'value': 15, 'name': '石斛' }, { 'value': 20, 'name': '麦冬' }, { 'value': 24, 'name': '红枣' }] },
    { 'name': '石斛太子参煲瘦肉', 'data': [{ 'value': 25, 'name': '太子参' }, { 'value': 25, 'name': '石斛' }, { 'value': 500, 'name': '瘦肉' }] },
    { 'name': '明目补肝汤', 'data': [{ 'value': 15, 'name': '石斛' }, { 'value': 15, 'name': '太子参' }, { 'value': 15, 'name': '淮山' }, { 'value': 300, 'name': '瘦肉' }] },
    { 'name': '石斛杞子猪肝汤', 'data': [{ 'value': 12, 'name': '石斛' }, { 'value': 12, 'name': '杞子' }, { 'value': 300, 'name': '猪肝' }] },
    { 'name': '清炖蚌肉', 'data': [{ 'value': 500, 'name': '鲜蚌肉' }, { 'value': 20, 'name': '姜' }] },
    { 'name': '松子仁煲西洋参鲜鸡汤', 'data': [{ 'value': 50, 'name': '松子仁' }, { 'value': 25, 'name': '西洋参' }] },
    { 'name': '橄榄响螺瘦肉汤', 'data': [{ 'value': 100, 'name': '橄榄' }, { 'value': 150, 'name': '响螺' }, { 'value': 250, 'name': '瘦肉' }] },
    { 'name': '鲜茅根霸王花猪肺汤', 'data': [{ 'value': 50, 'name': '霸王花' }, { 'value': 80, 'name': '鲜茅根' }, { 'value': 20, 'name': '南杏' }, { 'value': 15, 'name': '北杏' }, { 'value': 500, 'name': '猪肺' }, { 'value': 24, 'name': '蜜枣' }] },
    { 'name': '蜜枣淮山西施骨汤', 'data': [{ 'value': 50, 'name': '淮山' }, { 'value': 36, 'name': '蜜枣' }, { 'value': 400, 'name': '西施骨' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '灵芝煲猪肚', 'data': [{ 'value': 600, 'name': '猪肚' }, { 'value': 200, 'name': '灵芝' }, { 'value': 24, 'name': '蜜枣' }] },
    { 'name': '杞子滚牛肝汤', 'data': [{ 'value': 200, 'name': '牛肝' }, { 'value': 30, 'name': '杞子' }, { 'value': 200, 'name': '牛肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '使君子煲瘦肉汤', 'data': [{ 'value': 15, 'name': '使君子' }, { 'value': 150, 'name': '瘦肉' }] },
    { 'name': '石斛玉竹沙参煲瘦肉汤', 'data': [{ 'value': 15, 'name': '石斛' }, { 'value': 15, 'name': '玉竹' }, { 'value': 15, 'name': '沙参' }, { 'value': 200, 'name': '瘦肉' }] },
    { 'name': '椰子黄豆无花果田鸡汤', 'data': [{ 'value': 50, 'name': '黄豆' }, { 'value': 400, 'name': '椰子' }, { 'value': 300, 'name': '无花果' }, { 'value': 750, 'name': '田鸡' }, { 'value': 350, 'name': '鸡肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '猫爪草煲瘦肉', 'data': [{ 'value': 20, 'name': '猫爪草' }, { 'value': 150, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '杜仲补骨脂排骨汤', 'data': [{ 'value': 25, 'name': '杜仲' }, { 'value': 15, 'name': '补骨脂' }, { 'value': 300, 'name': '排骨' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '淮山桂圆炖水鱼', 'data': [{ 'value': 25, 'name': '淮山' }, { 'value': 25, 'name': '桂圆' }, { 'value': 200, 'name': '水鱼' }, { 'value': 100, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '眉豆花生玉米煲山斑鱼汤', 'data': [{ 'value': 150, 'name': '眉豆' }, { 'value': 50, 'name': '花生' }, { 'value': 100, 'name': '玉米' }, { 'value': 30, 'name': '姜' }, { 'value': 300, 'name': '山斑鱼' }, { 'value': 200, 'name': '瘦肉' }] },
    { 'name': '无花果花生煲猪肚汤', 'data': [{ 'value': 60, 'name': '无花果' }, { 'value': 50, 'name': '花生' }, { 'value': 500, 'name': '猪肚' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '榴莲芯煲鲫鱼汤', 'data': [{ 'value': 400, 'name': '榴莲芯' }, { 'value': 400, 'name': '鲫鱼' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '淮山莲子煲海龙', 'data': [{ 'value': 40, 'name': '淮山' }, { 'value': 40, 'name': '茨实' }, { 'value': 25, 'name': '莲子' }, { 'value': 250, 'name': '海龙' }] },
    { 'name': '党参百合煲猪肺', 'data': [{ 'value': 25, 'name': '党参' }, { 'value': 25, 'name': '百合' }, { 'value': 500, 'name': '猪肺' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '毛冬青杞子菟丝子煲瘦肉汤', 'data': [{ 'value': 30, 'name': '毛冬青' }, { 'value': 10, 'name': '杞子' }, { 'value': 10, 'name': '菟丝子' }, { 'value': 10, 'name': '熟地' }, { 'value': 400, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '西红柿滚咸猪肉汤', 'data': [{ 'value': 500, 'name': '西红柿' }, { 'value': 200, 'name': '红萝卜' }, { 'value': 300, 'name': '咸猪肉' }, { 'value': 30, 'name': '姜' }, { 'value': 50, 'name': '葱' }] },
    { 'name': '川贝北杏炖鳄鱼肉', 'data': [{ 'value': 100, 'name': '鳄鱼肉' }, { 'value': 12, 'name': '川贝' }, { 'value': 12, 'name': '北杏' }, { 'value': 100, 'name': '瘦肉' }] },
    { 'name': '猫爪草夏枯草煲瘦肉汤', 'data': [{ 'value': 30, 'name': '猫爪草' }, { 'value': 45, 'name': '夏枯草' }, { 'value': 20, 'name': '黄豆' }, { 'value': 500, 'name': '瘦肉' }] },
    { 'name': '沙榄去耳煲猪展汤', 'data': [{ 'value': 100, 'name': '鲜沙榄' }, { 'value': 50, 'name': '云耳' }, { 'value': 400, 'name': '猪展肉' }] },
    { 'name': '灵芝桂圆煲瘦肉汤', 'data': [{ 'value': 100, 'name': '桂圆' }, { 'value': 15, 'name': '灵芝' }, { 'value': 100, 'name': '瘦肉' }] },
    { 'name': '西洋参石斛淮山煲鸡', 'data': [{ 'value': 30, 'name': '石斛' }, { 'value': 20, 'name': '西洋参' }, { 'value': 20, 'name': '淮山' }, { 'value': 500, 'name': '鸡' }] },
    { 'name': '竹蔗红罗卜猪骨汤', 'data': [{ 'value': 250, 'name': '竹蔗' }, { 'value': 500, 'name': '红罗卜' }, { 'value': 2, 'name': '陈皮' }, { 'value': 500, 'name': '猪骨' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '党参百合猪肺', 'data': [{ 'value': 30, 'name': '党参' }, { 'value': 50, 'name': '百合' }, { 'value': 500, 'name': '猪肺' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '芡实江珧柱猪粉肠汤', 'data': [{ 'value': 30, 'name': '江珧柱' }, { 'value': 50, 'name': '芡实' }, { 'value': 400, 'name': '猪粉肠' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '莲藕鲤鱼汤', 'data': [{ 'value': 500, 'name': '莲藕' }, { 'value': 500, 'name': '鲤鱼' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '川贝枇杷叶炖鳄鱼肉瘦肉汤', 'data': [{ 'value': 5, 'name': '川贝' }, { 'value': 2, 'name': '枇杷叶' }, { 'value': 300, 'name': '鳄鱼肉' }, { 'value': 200, 'name': '瘦肉' }] },
    { 'name': '丹参四鸡炖冰糖', 'data': [{ 'value': 15, 'name': '丹参' }, { 'value': 300, 'name': '田鸡' }, { 'value': 30, 'name': '冰糖' }] },
    { 'name': '栗子莲子猪腰汤', 'data': [{ 'value': 30, 'name': '莲子' }, { 'value': 60, 'name': '栗子' }, { 'value': 300, 'name': '猪腰' }, { 'value': 300, 'name': '猪骨' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '鸭梨北杏鹅肉汤', 'data': [{ 'value': 12, 'name': '北杏' }, { 'value': 400, 'name': '鸭梨' }, { 'value': 45, 'name': '百合' }, { 'value': 500, 'name': '鹅肉' }] },
    { 'name': '浮小麦黑豆生蚝汤', 'data': [{ 'value': 50, 'name': '黑豆' }, { 'value': 25, 'name': '浮小麦' }, { 'value': 15, 'name': '熟地' }, { 'value': 500, 'name': '生蚝肉' }, { 'value': 10, 'name': '桂圆' }, { 'value': 300, 'name': '猪展肉' }, { 'value': 30, 'name': '姜' }, { 'value': 2, 'name': '陈皮' }] },
    { 'name': '核桃淮山芡实猪展汤', 'data': [{ 'value': 50, 'name': '芡实' }, { 'value': 100, 'name': '核桃' }, { 'value': 25, 'name': '淮山' }, { 'value': 400, 'name': '猪展肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '北芪南枣黄鳝汤', 'data': [{ 'value': 20, 'name': '北芪' }, { 'value': 40, 'name': '南枣' }, { 'value': 500, 'name': '黄鳝' }, { 'value': 300, 'name': '猪展肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '无花果茶树菇山鸡汤', 'data': [{ 'value': 150, 'name': '茶树菇' }, { 'value': 200, 'name': '无花果' }, { 'value': 18, 'name': '红枣' }, { 'value': 500, 'name': '山鸡' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '芋干瘦肉汤', 'data': [{ 'value': 100, 'name': '芋干' }, { 'value': 40, 'name': '淡菜' }, { 'value': 500, 'name': '瘦肉' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '原盅炖北菇', 'data': [{ 'value': 40, 'name': '北菇' }, { 'value': 40, 'name': '鸡骨' }, { 'value': 50, 'name': '葱' }, { 'value': 20, 'name': '姜' }] },
    { 'name': '杜仲肉菘蓉煲猪骨汤', 'data': [{ 'value': 45, 'name': '杜促' }, { 'value': 30, 'name': '肉菘蓉' }, { 'value': 300, 'name': '猪骨' }] },
    { 'name': '莲藕红豆白鸽汤', 'data': [{ 'value': 750, 'name': '莲藕' }, { 'value': 50, 'name': '鱿鱼干' }, { 'value': 50, 'name': '红豆' }, { 'value': 350, 'name': '白鸽' }, { 'value': 30, 'name': '姜' }, { 'value': 36, 'name': '红枣' }] },
    { 'name': '新鲜霸王花猪展汤', 'data': [{ 'value': 400, 'name': '鲜霸王花' }, { 'value': 36, 'name': '红枣' }, { 'value': 500, 'name': '猪展' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '核桃淡菜番鸭汤', 'data': [{ 'value': 400, 'name': '核桃' }, { 'value': 50, 'name': '白果' }, { 'value': 50, 'name': '莲子' }, { 'value': 100, 'name': '淡菜' }, { 'value': 30, 'name': '红枣' }, { 'value': 500, 'name': '番鸭肉' }] },
    { 'name': '党参北芪茨实淮山煲瘦肉', 'data': [{ 'value': 30, 'name': '党参' }, { 'value': 15, 'name': '茨实' }, { 'value': 10, 'name': '北芪' }, { 'value': 30, 'name': '淮山' }, { 'value': 500, 'name': '瘦肉' }] },
    { 'name': '萝卜滚鳕鱼汤', 'data': [{ 'value': 500, 'name': '萝卜' }, { 'value': 300, 'name': '鳕鱼' }, { 'value': 30, 'name': '姜' }, { 'value': 20, 'name': '芜茜' }, { 'value': 30, 'name': '葱' }] },
    { 'name': '白果枝竹冬瓜老鸭汤', 'data': [{ 'value': 100, 'name': '枝竹' }, { 'value': 100, 'name': '白果' }, { 'value': 1000, 'name': '冬瓜' }, { 'value': 700, 'name': '老鸭' }, { 'value': 20, 'name': '芡实' }, { 'value': 30, 'name': '姜' }, { 'value': 2, 'name': '陈皮' }] },
    { 'name': '蜜瓜海螺老鸡汤', 'data': [{ 'value': 250, 'name': '鲜海螺肉' }, { 'value': 250, 'name': '蜜瓜' }, { 'value': 500, 'name': '老鸡' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '冬虫草珧柱猪展汤', 'data': [{ 'value': 20, 'name': '江珧柱' }, { 'value': 15, 'name': '冬虫草' }, { 'value': 500, 'name': '猪展' }, { 'value': 30, 'name': '姜' }] },
    { 'name': '眉豆花生红枣猪尾汤', 'data': [{ 'value': 150, 'name': '眉豆' }, { 'value': 50, 'name': '花生' }, { 'value': 30, 'name': '红枣' }, { 'value': 750, 'name': '猪尾' }, { 'value': 30, 'name': '姜' }, { 'value': 0, 'name': '陈皮2' }] },

  ];
  // 获取推荐框元素
  var autocompleteList = document.getElementById('autocomplete-list');
  // 重新排序并渲染推荐框内容
  function sortAndRenderAutocompleteList() {
    // 获取推荐框内的所有项
    var items = Array.from(autocompleteList.getElementsByClassName('autocomplete-item'));

    // 根据首字母进行排序
    items.sort(function (a, b) {
      var textA = a.textContent.toLowerCase();
      var textB = b.textContent.toLowerCase();
      if (textA < textB) {
        return -1;
      }
      if (textA > textB) {
        return 1;
      }
      return 0;
    });

    // 清空推荐框内容
    autocompleteList.innerHTML = '';

    // 重新渲染排序后的项
    items.forEach(function (item) {
      autocompleteList.appendChild(item);
    });
  }

  // 监听搜索框输入事件
  document.getElementById('search-field').addEventListener('input', function () {
    var userInput = document.getElementById('search-field').value;

    // 在菜品数据中查找匹配的菜名
    var matchedMenus = menuData.filter(function (menu) {
      return menu.name.toLowerCase().includes(userInput.toLowerCase());
    });

    // 清空推荐框内容
    autocompleteList.innerHTML = '';

    // 添加匹配菜名到推荐框中
    matchedMenus.forEach(function (menu) {
      var listItem = document.createElement('div');
      listItem.textContent = menu.name;
      listItem.classList.add('autocomplete-item');
      listItem.addEventListener('click', function () {
        document.getElementById('search-field').value = menu.name;
        const element = document.getElementById("search-submit");
        element.click()
        autocompleteList.innerHTML = '';
      });
      autocompleteList.appendChild(listItem);
    });

    // 重新排序并渲染推荐框内容
    sortAndRenderAutocompleteList();
  });

  // 获取搜索框和推荐框元素
  var searchField = document.getElementById('search-field');

  // 监听搜索框失去焦点事件
  searchField.addEventListener('blur', function () {
    // 使用 setTimeout 延迟隐藏推荐框
    setTimeout(function () {
      autocompleteList.style.display = 'none';
    }, 200);
  });

  // 监听搜索框的 focus 事件
  searchField.addEventListener('focus', function () {
    // 显示推荐框
    autocompleteList.style.display = 'block';
  });

  // 监听推荐框内容的 mousedown 事件
  autocompleteList.addEventListener('mousedown', function (event) {
    // 阻止搜索框失去焦点事件触发
    event.preventDefault();
    // 将点击的推荐项填充到搜索框中
    searchField.value = event.target.textContent;
    // 更新其他操作...
  });


})
