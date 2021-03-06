--  车友汇文章列表
DROP TABLE IF EXISTS essay;
-- 日志ID   关联用户ID  类别ID 日志标题 日志图片数组 日志文字  发表时间  查看  点赞  回复
CREATE TABLE essay(
  `id` INT(12) PRIMARY KEY AUTO_INCREMENT,
  `u_id` INT (12),
  `c_id` INT (12),
  `e_title` VARCHAR (255),
  `e_img` VARCHAR (255),
  `e_text` VARCHAR (255),
  `issue` INT (12),
  `look` INT (12),
  `laud` INT (12),
  `reply` INT (12)
)DEFAULT CHARSET=UTF8;

-- 类别： 1、车常识
--       2、车社区
--       3、车新手
--       4、先生志

-- 第一栏  小列表图
-- 第二栏  大图页
-- 第三栏  分享文章
INSERT INTO essay(id,u_id,c_id,e_title,e_img,e_text,issue,look,laud,reply) VALUES
(1,1,1,'生活就应该浪费在美好的事物上','s-p-a-1.png,s-p-a-2.png,s-p-a-3.png','生活就应该浪费在美好的事物上,吃吃喝喝，玩玩乐乐',2,66,13,8),
(2,2,1,'一次探秘之旅','b-p-a-5.png','汽车内部奥妙无穷，我们帮你化整为零',6,24,5,7),
(3,3,1,'如果人类没有梦想','s-a-1.png','如果人类没有梦想，世界就会黯然失色，生活就会停滞不前。',10,27,5,3),
(4,4,2,'牺牲体验换来的实惠','s-p-a-4.png,s-p-a-5.png,s-p-a-1.png','我想结合着车主和乘客的角度来分析一下滴滴顺风车的使用体验。',1,4,1,0),
(5,5,2,'乘客预约下单','b-p-a-2.png','实际体验下来我发现人机交互相当混乱。',3,24,5,7),
(6,6,2,'至于刷单的问题，','s-a-2.png','至于刷单的问题，是任何平台都不能避免的。在之前我还幻想滴滴会有一些特别牛逼的算法来预防这个现象。',6,27,5,3),
(7,7,3,'友友租车的流程','s-p-a-2.png,s-p-a-3.png,s-p-a-4.png','友友租车的流程全部是在手机App上完成的。不像很多O2O业务，淘宝、去哪儿等，在网页和手机App同时都提供服务。',1,4,1,0),
(8,8,3,'用车体验','b-p-a-3.png','除了汽车行驶证，车主将汽车说明书等资料留在了车内。这样作为租客的我可以全面地了解汽车的功能。',3,24,5,7),
(9,9,3,'不一样的驾乘感受，','s-a-4.png','上海电动汽车试乘试驾中心是中国(上海)电动汽车示范区的核心功能性项目',8,27,5,3),
(10,10,4,'关于未来汽车','s-p-a-5.png,s-p-a-2.png,s-p-a-4.png',',我是一名资深车迷,从小就喜欢汽车,当同龄的孩子还在看动画片时,我就对各个汽车品牌如数家珍,',1,4,1,0),
(11,11,4,'汽车保养','b-p-a-4.png','今天,我们的车要去保养,我也跟着去了,还是蛮好玩的。 ',3,24,5,7),
(12,12,4,'不一样的驾乘感受，','s-a-4.png','上海电动汽车试乘试驾中心是中国(上海)电动汽车示范区的核心功能性项目',8,27,5,3);












