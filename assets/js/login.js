$(function() {
    // 切换登录和注册的盒子
    $('.goto-register a').click(function() {
        $('#register').show().prev().hide();
    });
    $('.goto-login a').click(function() {
        $('#register').hide().prev().show();
    })

    // 监听注册表单的提交事件
    $('#register form').on('submit', function(e) {
        // 阻止页面跳转
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3007/api/reguser',
            data: data,
            success: function(res) {
                alert(res.message);
                // 注册成功的话，隐藏注册盒子，并显示登录盒子
                if (res.status === 0) {
                    $('#register').hide().prev().show();
                }
            }
        })
    })

    // 注册页面验证
    var form = layui.form;
    form.verify({
        length: [/^\w{6,12}$/, '密码长度必须是6-12位'],
        some: function(value) {
            var password = $('#reg-password').val();
            if (password !== value) {
                return '行车不规范，亲人两行泪'
            }
        }
    })

    // 完成登录
    $('#login form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3007/api/login',
            data: $(this).serialize(),
            success: function(res) {
                alert(res.message);
                if (res.status === 0) {
                    location.href = '/index.html'
                }
            }
        })
    })
});