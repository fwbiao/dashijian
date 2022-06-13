$(function() {
    //顶部个人中心tab栏展开隐藏
    let timer = null
    $('#li_a').mouseenter(function() {
        clearTimeout(timer)
        $('.dl').show()
    })
    $('#li_a').mouseleave(function() {
        timer = setTimeout(() => {
            $('.dl').hide()
        }, 500)
    })
    $('.layui-nav-child').mouseleave(function() {
        $('.dl').hide()
    })
    $('.layui-nav-child').mouseenter(function() {
            clearTimeout(timer)
        })
        //侧边导航栏展开隐藏
    $('.artical-manage').on('click', function() {
        $(this).siblings().toggleClass('unfode')
        $(this).parent().siblings().children().removeClass('unfode')
    })
    $('.my-center').on('click', function() {
        $(this).siblings().toggleClass('unfode')
        $(this).parent().siblings().children().removeClass('unfode')
    })
})