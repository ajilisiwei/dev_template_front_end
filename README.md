# dev_template_front_end 说明
    这是前端代码，引入angular/jquery/bootstrap等前端框架，使用bower进行管理；开发阶段使用supervisor进行实时更新调试；部署阶段使用pm2;
    api接口先用node模拟，后期增加mock测试数据，最后与后台java api进行联调；

# 0.接口文档
    http://www.xiaoyaoji.cn/dashboard/#!/project/PiYiBgtYx

# 1.前端代码
    npm install
    bower install
    node ./bin/www

# 2.代码编辑是用supervisor，能实现自动检测刷新
    supervisor ./bin/www
