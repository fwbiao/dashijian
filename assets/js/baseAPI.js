//每次调用$.get(),$.post(),$.ajax,会先调用这个ajaxPrefilter这个函数
//这个函数能拿到我们给ajax的配置对象
$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url);
})