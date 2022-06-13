$(function() {
    let form = layui.form
    let layer = layui.layer
    form.verify({
        nickname: function(value) {
            if (value.length > 6) {
                return '昵称长度必须在1~6个字符之间！'
            }
        }
    })

    initUserInfo()
        //初始化用户信息
    function initUserInfo() {
        $.ajax({
            method: 'get',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败')
                }
                form.val('formUserInfo', res.data)
            }
        })
    }

    $('#btn').on('click', function(e) {
        e.preventDefault()

        initUserInfo()
    })
    $('.layui-form').on('submit', function(e) {
        e.preventDefault()
            //发起ajax
        $.ajax({
            method: 'post',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) return layer.msg('更新失败')
                layer.msg('更新成功')
                window.parent.getUserInfo()
            }
        })
    })
})