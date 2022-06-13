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
                //渲染用户头像
            renderAvatar(res.data)
        },

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