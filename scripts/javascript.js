
$(document).ready(function () {
	//使用了hoverIntent插件，鼠标悬停显示子菜单，鼠标离开时隐藏子菜单。
	$("ul#nav li").hoverIntent(function () {
		$(this).children('ul').slideDown(300);
	}, function () {
		$(this).children('ul').slideUp(300);
	});

	//删 $("<select />").appendTo("nav");

	// // Create default option "Go to..."
	// $("<option />", {
	// 	"selected": "selected",
	// 	"value": "",
	// 	"text": "Go to..."
	// }).appendTo("nav select");


	// $("nav a").each(function () {
	// 	var el = $(this);
	// 	$("<option />", {
	// 		"value": el.attr("href"),
	// 		"text": el.text()
	// 	}).appendTo("nav select");
	// });

	// $("nav select").change(function () {
	// 	window.location = $(this).find("option:selected").val();
	// });

	//Flexslider	 轮播图
	$('.flexslider').flexslider();

	//Masonry库 砌体（masonry）网格布局
	$('#content-mos').masonry({
		itemSelector: '.tile',
		columnWidth: 160,
		isAnimated: true,
		isFitWidth: true
	});

	//当鼠标悬停在一个元素上时，其他具有"class"为"tile"的元素会添加淡化效果
	$('.tile').not('.exclude').hover(function () {
		$('.tile').not(this).addClass('fade');
	},
		function () {
			$('.tile').removeClass('fade');
		});
	$('.tile').append('<img class="tilehover" src="images/tilehover.png" alt=" "/>');

	//LiveTile插件 鼠标悬停时暂停Live Tile的动画效果
	$(".live").liveTile({ pauseOnHover: true });


	//展开或收起
	$(".toggle-button").click(function () {
		$(this).next("div.toggle-content").slideToggle("slow");
		$(this).children('.toggle-indicator').text($(this).children('.toggle-indicator').text() == '+' ? '-' : '+');
	});




	//点击弹窗
	$("a.lightbox").click(function () {
		$(this).next(".tile-pre").addClass("tempsrc");
	});
	var lbSRC = "";
	$("a.lightbox").fancybox({
		'margin': 0,
		'overlayColor': '#000',
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		'speedOut': 100,
		'cyclic': true,
		//Lightbox iframe fix
		'onComplete': function () {
			lbSRC = $('#fancybox-content').find('iframe').attr('src');
		},
		'onClosed': function () {
			$('.tempsrc').find('iframe').attr('src', lbSRC);
			$('.tile-pre').removeClass('tempsrc');
		}
	});






	// 同时过滤
	$('ul#port-filter a').click(function () {
		$(this).css('outline', 'none');
		$('ul#port-filter .filter-current').removeClass('filter-current');
		$(this).parent().addClass('filter-current');

		var filterVal1 = $(this).text().toLowerCase().replace(' ', '-');
		var filterVal2 = $('ul#port-filter-organ .filter-current a').text().toLowerCase().replace(' ', '-');

		if (filterVal1 == '食材' && filterVal2 !== '作用部分') {
			$('div#portfolio div.tile').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});
			$('div.portfoliolist').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});

			$('div#portfolio div.tile.' + filterVal2).fadeIn('fast').removeClass('hidden');
			$('div.portfoliolist.' + filterVal2).fadeIn('fast').removeClass('hidden');
		} else if (filterVal2 == '作用部分' && filterVal1 !== '食材') {
			$('div#portfolio div.tile').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});
			$('div.portfoliolist').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});

			$('div#portfolio div.tile.' + filterVal1).fadeIn('fast').removeClass('hidden');
			$('div.portfoliolist.' + filterVal1).fadeIn('fast').removeClass('hidden');
		} else if (filterVal1 == '食材' && filterVal2 == '作用部分') {
			$('div.hidden').fadeIn('fast').removeClass('hidden');
		} else {
			$('div#portfolio div.tile').each(function () {
				if (!$(this).hasClass(filterVal1) || !$(this).hasClass(filterVal2)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});
			$('div.portfoliolist').each(function () {
				if (!$(this).hasClass(filterVal1) || !$(this).hasClass(filterVal2)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});
		}

		return false;
	});

	$('ul#port-filter-organ a').click(function () {
		$(this).css('outline', 'none');
		$('ul#port-filter-organ .filter-current').removeClass('filter-current');
		$(this).parent().addClass('filter-current');

		var filterVal2 = $(this).text().toLowerCase().replace(' ', '-');
		var filterVal1 = $('ul#port-filter .filter-current a').text().toLowerCase().replace(' ', '-');

		if (filterVal1 == '食材' && filterVal2 !== '作用部分') {
			$('div#portfolio div.tile').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});
			$('div.portfoliolist').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});

			$('div#portfolio div.tile.' + filterVal2).fadeIn('fast').removeClass('hidden');
			$('div.portfoliolist.' + filterVal2).fadeIn('fast').removeClass('hidden');
		} else if (filterVal2 == '作用部分' && filterVal1 !== '食材') {
			$('div#portfolio div.tile').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});
			$('div.portfoliolist').each(function () {
				$(this).fadeOut('fast').addClass('hidden');
			});

			$('div#portfolio div.tile.' + filterVal1).fadeIn('fast').removeClass('hidden');
			$('div.portfoliolist.' + filterVal1).fadeIn('fast').removeClass('hidden');
		} else if (filterVal1 == '食材' && filterVal2 == '作用部分') {
			$('div.hidden').fadeIn('fast').removeClass('hidden');
		} else {
			$('div#portfolio div.tile').each(function () {
				if (!$(this).hasClass(filterVal1) || !$(this).hasClass(filterVal2)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});
			$('div.portfoliolist').each(function () {
				if (!$(this).hasClass(filterVal1) || !$(this).hasClass(filterVal2)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});
		}

		return false;
	});



	// input聚焦
	$('[placeholder]').focus(function () {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function () {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur().parents('form').submit(function () {
		$(this).find('[placeholder]').each(function () {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});

});



$(document).ready(function () {
	$('#search-submit').click(function (event) {
		event.preventDefault(); // 阻止表单的默认提交行为

		var searchField = $('#search-field');
		var inputValue = searchField.val();
		console.log(inputValue)

		var matchingElements = $('div#portfolio div.tile').filter('.' + inputValue);
		var count = matchingElements.length;

		if (count >= 1) {
			$('div#portfolio div.tile').each(function () {
				if (!$(this).hasClass(inputValue)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});

		} else {


		}
	});
});



// 数据展示按钮

// 点击增加次数



document.addEventListener('DOMContentLoaded', function () {
	const portfolioDiv = document.querySelector('#portfolio');
	console.log(portfolioDiv);

	// 从localStorage中获取dynamicVariables的值
	var storedDynamicVariables = JSON.parse(localStorage.getItem('dynamicVariables')) || [];
	dynamicVariables = storedDynamicVariables;
	localStorage.setItem('dynamicVariables', JSON.stringify(dynamicVariables));
	// 绑定点击事件处理程序
	portfolioDiv.addEventListener('click', function (event) {
		const spanContent = event.target.textContent.trim();
		console.log(spanContent);

		if (spanContent.length <= 12) {
			// 检查dynamicVariables数组中是否已经存在name为spanContent的对象
			var existingVariable = dynamicVariables.find(function (variable) {
				return variable.name === spanContent;
			});

			if (existingVariable) {
				existingVariable.value += 1;
			} else {
				dynamicVariables.push({ name: spanContent, value: 1 });
			}

			// 将dynamicVariables的值保存到localStorage中
			localStorage.setItem('dynamicVariables', JSON.stringify(dynamicVariables));
		}

		// 输出动态变量的值
		console.log(dynamicVariables);
	});
});

// 药膳搜索返回按钮
function goBack() {
	window.history.back();
}

// 药膳搜索回弹
document.addEventListener("DOMContentLoaded", function () {
	// 获取当前 URL 中的 herb 参数的值
	const urlParams = new URLSearchParams(window.location.search);
	const herb = urlParams.get('herb');
	const herbs = ["党参", "淮山", "姜", "芡实", "百合", "杞子", "沙参", "太子参", "无花果", "浮小麦", "陈皮", "南杏", "北杏", "北芪", "江珧柱", "白果", "莲子", "西洋参", "石斛", "心", "肝", "脾", "肺", "肾", "大肠"];

	// 如果 herb 参数存在且不为空，则查找对应的按钮并模拟点击
	if (herb) {
		// 找到所有标签为 a 的元素

		if (herbs.includes(herb)) {
			console.log("herb 的值在herbs数组中");
			const buttons = document.querySelectorAll("#port-filter li a");
			const buttons2 = document.querySelectorAll("#port-filter-organ li a");
			// 遍历按钮，查找匹配的 herb 参数值的按钮
			buttons.forEach(function (button) {
				if (button.textContent.trim() === herb) {
					// 找到匹配的按钮后，模拟点击
					button.click();
				}

			}


			)
			buttons2.forEach(function (button) {
				if (button.textContent.trim() === herb) {
					// 找到匹配的按钮后，模拟点击
					button.click();
				}

			});
		} else {
			$('div#portfolio div.tile').each(function () {
				if (!$(this).hasClass(herb)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});
			$('div.portfoliolist').each(function () {
				if (!$(this).hasClass(herb)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});
		}

	}
});


// 药膳推荐yo药膳搜索
document.addEventListener("DOMContentLoaded", function () {
	// 获取当前 URL 中的 herb 参数的值
	const urlParams = new URLSearchParams(window.location.search);
	const YSname = urlParams.get('YSname');
	// 如果 herb 参数存在且不为空，则查找对应的按钮并模拟点击
	if (YSname) {
		// 找到所有标签为 a 的元素
		console.log("收到了" + YSname)
		if (YSname == "药膳") {
			console.log("收到了" + YSname)
		}
		else {
			$('div#portfolio div.tile').each(function () {
				if (!$(this).hasClass(YSname)) {
					$(this).fadeOut('fast').addClass('hidden');
				} else {
					$(this).fadeIn('fast').removeClass('hidden');
				}
			});
		}
	} else {
		console.log("没" + YSname)
	}

}
);