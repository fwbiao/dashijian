$(function() {
    //调用getUserInfo 获取用户基本信息
    getUserInfo()
})

function getUserInfo() {
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function(res) {
            if (res.status !== 0) return console.log('获取用户信息失败')
            console.log(res);
            //渲染用户头像
            renderAvatar(res.data)
        },
        //无论访问成功还是失败都会调用complete
        complete: function(res) {
            if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
                localStorage.removeItem('token')
                location.href = '/login.html'
            }
        }

    })
}

function renderAvatar(user) {
    //获取用户名称
    let name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp' + name)
        //有图片头像就渲染头像，，没有就渲染文字头像
    if (user.user_pic) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        let first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}