# 转专业信息填报小程序

身份选择

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207173636267.png" alt="image-20201207173636267" style="zoom:50%;" />

# 1.学生端

## 1.1 首页

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207155209717.png" alt="image-20201207155209717" style="zoom: 50%;" />

### 1.1.1 操作指引

点击下一步会跳转对应的页面，当前页面操作完毕后会跳转到主页并刷新步骤条

当所有页面全部操作完毕后，下一步的按钮就会消失

![image-20201207155320375](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207155320375.png)

![image-20201207162738898](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207162738898.png)

#### 1.1.1.1 身份认证

身份认证需要同学填写四川大学本科教务系统的账号和密码，由云函数通过POST方法模拟登录进行验证

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207155446525.png" alt="image-20201207155446525" style="zoom:50%;" />

验证失败：返回身份验证失败

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207155711254.png" alt="image-20201207155711254" style="zoom:50%;" />



验证成功：返回欢迎你！和同学姓名

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207155804277.png" alt="image-20201207155804277" style="zoom:50%;" />



#### 1.1.1.2 基本信息填写

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207155914876.png" alt="image-20201207155914876" style="zoom:50%;" />



填写失败：

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207155937278.png" alt="image-20201207155937278" style="zoom:50%;" />



填写成功：

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207160231403.png" alt="image-20201207160231403" style="zoom:50%;" />

#### 1.1.1.3 证明材料上传

支持图片预览和删除

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207160412401.png" alt="image-20201207160412401" style="zoom:50%;" />

上传失败：

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207160439678.png" alt="image-20201207160439678" style="zoom:50%;" />



上传成功：

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207163149654.png" alt="image-20201207163149654" style="zoom:50%;" />

#### 1.1.1.4 成绩单上传

从微信聊天记录当中选择文件，比如文件传输助手

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207161813905.png" alt="image-20201207161813905" style="zoom:50%;" />



 上传成功：

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207163301749.png" alt="image-20201207163301749" style="zoom: 25%;" />

#### 1.1.1.5 课程调查

必须每一个都选择，否则无法提交

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207162516355.png" alt="image-20201207162516355" style="zoom:50%;" />

提交成功：

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207162712029.png" alt="image-20201207162712029" style="zoom:50%;" />

### 1.1.2 通知公告

点击对应的通知卡片即可进入对应的具体通知，通知形式支持markdown语法

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207162804529.png" alt="image-20201207162804529" style="zoom:50%;" />

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207162858841.png" alt="image-20201207162858841" style="zoom:50%;" />



## 1.2 我的

所有页面操作完毕后，可以进入我的界面查看已经填写的内容

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207163534043.png" alt="image-20201207163534043" style="zoom:50%;" />

### 1.2.1 个人信息

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207163551931.png" alt="image-20201207163551931" style="zoom:50%;" />

### 1.2.2 证明材料

可以打开上传的pdf并展示图片

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207163638092.png" alt="image-20201207163638092" style="zoom:50%;" />

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207163904496.png" alt="image-20201207163904496" style="zoom:50%;" />



### 1.2.3 课程情况

展示已修读和未休读的课程并统计学分

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207163832670.png" alt="image-20201207163832670" style="zoom:50%;" />

### 1.2.4 意见反馈

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207164040895.png" alt="image-20201207164040895" style="zoom:50%;" />

# 2.管理端

登录



<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207173711874.png" alt="image-20201207173711874" style="zoom:50%;" />



<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207165936123.png" alt="image-20201207165936123" style="zoom:50%;" />

## 2.1 学院人数统计

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207170010636.png" alt="image-20201207170010636" style="zoom:50%;" />

## 2.2 男女比例统计

## 2.3 学分未达标统计

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207175314934.png" alt="image-20201207175314934" style="zoom:50%;" />

## 2.4 特长同学统计

不满足报名要求但是有特长证明的同学

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207175807300.png" alt="image-20201207175807300" style="zoom:50%;" />

## 2.5 学生信息导出

复制下载链接到浏览器即可

<img src="https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207170131362.png" alt="image-20201207170131362" style="zoom:50%;" />

## 2.6 学生资料导出

复制下载链接到浏览器，将下载脚本（python）和下载的表格（.xlsx）放在同一目录下  

运行后会在这个目录中建立（学号-姓名）的文件夹，里面包含了该同学上传的所有资料  

效果截图

![20201207170525](https://laoba-1304292449.cos.ap-chengdu.myqcloud.com/img/20201207170525.png)

![20201207170536](https://laoba-1304292449.cos.ap-chengdu.myqcloud.com/img/20201207170536.png)

# 3.后台

## 3.1 云数据库

三个集合：

course_info: 课程信息

student_info：学生信息

teacher_user：管理端信息

![image-20201207164104159](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207164104159.png)

### 3.1.1 课程信息

学院申请转入学生课程修读情况调查表的所有课程

colleage：开课单位

courseNO：课程号

credits：学分

lessonNO：序号

name：课程名

seminar：开课学年学期

![image-20201207164236139](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207164236139.png)

### 3.1.2 学生信息

CET4：四级成绩

ID：学号

PHD：是否攻读博士

choice：毕业选择

college：学院

courses：课程调查

credit：已修读学分

downgrad：是否同意降级

fileIDs：证明材料的fileid

major：专业

name：姓名

pdf：成绩单的fileid

phone：电话号码

sex：性别

![image-20201207164457493](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207164457493.png)

### 3.1.3 管理端信息

account：管理端登录用户名

password：管理端登录密码

![image-20201207164731243](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207164731243.png)

## 3.2 云存储

分文件夹（学号-姓名）存储证明材料和成绩单，以及导出的文件下载地址和学生信息

![image-20201207164809327](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207164809327.png)



![image-20201207165730697](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207165730697.png)



## 3.3 云函数

主要是统计信息的获取，openid的获取以及教务处认证

![image-20201207165828845](https://halo-1259052167.cos.ap-chengdu.myqcloud.com/img/image-20201207165828845.png)