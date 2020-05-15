$(function() {
    getUserInfo();
});

// 封装一个函数获取用户信息
function getUserInfo() {
    $.ajax({
        url: 'http://www.liulongbin.top:3007/my/userinfo',
        success: function(res) {
            if (res.status === 0) {
                // 设置欢迎语
                var name = res.data.nickname || res.data.username;
                $('.welcome').html('欢迎你&nbsp;&nbsp;' + name);
                // 设置欢迎头像
                if (res.data.user_pic) {
                    $('.layui-nav-img').attr('src', res.data.user_pic).show();
                    $('.text-img').hide();
                } else {
                    $('.layui-nav-img').hide();
                    $('.text-img').css('display', 'inline-block').text(name.substr(0, 1).toUpperCase());
                }
            }
        },
        headers: {
            Authorization: localStorage.getItem('token'),
        }
    })
}