//每次调用$.get(),$.post(),$.ajax,会先调用这个ajaxPrefilter这个函数
//这个函数能拿到我们给ajax的配置对象
$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
        //统一为有权限的接口设置headers请求头
    if (options.url.indexOf('/my/') !== -1) {
        Authorization: localStorage.getItem('token') || ''
    }
    options.headers = { Authorization: localStorage.getItem('token') || '' }
        //统一挂载complete
        //无论访问成功还是失败都会调用complete
    options.complete = function(res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
    }

})