先说说自己踩过的坑吧 ！！
1.  Node版本不对，安装的是v0.10包，无法运行es6，导致一直js报错
2. 端口没有开启，外部无法直接访问IP+端口号


我vps是centOS系统，现在说说搭建的完整流程吧：

一. 安装node

           1.  cd到你要安装的node的目录下，到node官网（https://nodejs.org/dist/）上复制源码地址，执行：
                wget https://nodejs.org/dist/v8.2.1/node-v8.2.1.tar.gz

           2. 解压提取文件
                tar zxvf node-v8.2.1.tar.gz
        
           3. cd 进入node-v8.2.1文件夹，里面有个configure文件（make这一步时间会很长，大约有10分钟多）
                ./config
                make
            
           4. 安装
                make install

           5. 检查
                node -v

二. copy项目代码
        
        项目放在git上， 直接git clone，npm install && node app.js

三. 开启端口

    目前直接IP+端口号访问的时候，浏览器显示拒绝访问，需要开启端口
            

           1. 检查端口是否开启
                firewall-cmd --query-port=3000/tcp
               如果显示no    就是没有开启

           2. 开启端口
                firewall-cmd --add-port=3000/tcp