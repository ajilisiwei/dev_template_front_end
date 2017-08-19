# dev_template_front_end
这是前端代码，引入angular/jquery/bootstrap等前端框架，使用bower进行管理；开发阶段使用supervisor进行实时更新调试；部署阶段使用pm2; \n
api接口先用node模拟，后期增加mock测试数据，最后与后台java api进行联调；\n

0.接口文档 \n
http://www.xiaoyaoji.cn/dashboard/#!/project/PiYiBgtYx  \n

1.前端代码  \n
npm install \n
bower install \n
node ./bin/www \n

2.代码编辑是用supervisor，能实现自动检测刷新  \n
supervisor ./bin/www  \n