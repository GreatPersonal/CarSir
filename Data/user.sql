-- 用户表：
DROP TABLE IF EXISTS user;
-- 用户id   用户名  个性签名  头像 勋章 荣誉  发表时间
CREATE TABLE user(
  `id` INT(12) PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR (255),
  `sign` VARCHAR (255),
  `portrait` VARCHAR (255),
  `medal` VARCHAR (255),
  `honor` VARCHAR (255)
)DEFAULT CHARSET=UTF8;

INSERT INTO user(id,name,sign,portrait,medal,honor) VALUES
(1,'我是你的眼','从今以后保持低调，对自己的美貌与智...','rlm-user-head-1.png','rlm-user-icon-1','rlm-user-icon-2'),
(2,'Nido','这世界总有人在忙忙碌碌寻宝...','rlm-user-head-2.png','rlm-user-icon-2' ,' '),
(3,'夏未央','压力是造成秃头的原因，但可以治疗','rlm-user-head-3.png','rlm-user-icon-1' ,' '),
(4,'时尚大师','我不需要别人来陪我，你不在我...','rlm-user-head-4.png','rlm-user-icon-1' ,'rlm-user-icon-2'),
(5,'Jung','车的业务这么多，累死了','rlm-user-head-5.png','rlm-user-icon-1' ,'rlm-user-icon-2'),
(6,'侯苏泷','刚刚在一个日报上发现...','rlm-user-head-6.png','rlm-user-icon-2',' '),
(7,'我嘞个去','很喜欢这样...','rlm-user-head-7.png','rlm-user-icon-2',' '),
(8,'寂寞','很不错...','rlm-user-head-8.png','rlm-user-icon-1',' '),
(9,'贝贝','彩虹过后是什么...','rlm-user-head-9.png','rlm-user-icon-1','rlm-user-icon-2'),
(10,'Kiml','一个非常好的对车轮胎的知...','rlm-user-head-10.png','rlm-user-icon-1',' '),
(11,'UOK','懂车的来看看...','rlm-user-head-11.png','rlm-user-icon-2',' '),
(12,'唯美之花','最近还好吗，想念...','rlm-user-head-12.png','rlm-user-icon-1',' '),
(13,'轩轩','别辜负好时光...','rlm-user-head-13.png','rlm-user-icon-1','rlm-user-icon-2'),
(14,'布丁','麻利麻利哄...','rlm-user-head-14.png',' ',' ');