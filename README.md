# 车管家App

## 项目描述
    名称： 车管家 
    时间： 2017-4-21
    参与人员：孙晓军、郝雨凡、白晓军、丁宇、任黎敏、郭建龙

## 命名规范
    所有的img、js、css 文件 都以自己姓名缩写为前缀如 rlm_index.css 
    多人开发同一个页面，css选择器请加自己姓名缩写前缀防止冲突
    图片，选择器 名称命名均采用类似 rlm-logo.jpg  rlm-nav方式命名
    注意： 统一采用下划线 rlm_index.css 
    注释问题 公共组件相关必须把注释标好
    
## 组件API    (方便组件重用)

功能 | 组件由API
--- | ---
车友汇 | <Friend/>

## bass.scss  
#### 有内宽的加类名 container ，个人的类名不要起container；


    |---特大号字体                               $large-font;
    |---导航栏文字,模块标题                      $nav-font;
    |---文章标题                                 $title-font;
    |---内容文字                                 $content-font;
    |---备注文字                                 $sub-font;
    |---相应的英文字体                           $XXX-en-font;(实例：文章标题对应的英文字体为$title-en-font;)
    |---导航栏,标题栏和重要的标题文字            $nav-color;
    |---按钮及想要突出的文字                     $button-color;
    备注:$nav-color,$button-color为渐变颜色，使用方法background-image:$nav-color;
    |---辅助,次要的文字信息                      $title-color;
    |---段落信息,引导词                          $content-color;
    |---装饰线条及版块分割                       $line-color;
    |---背景色                                   $bg-color;

## 数据库建立
### 库名：CarSteward
#### 连接数据库DOPDO

方法描述 | 方法名
---|---
查询所有 | fetchAll
单行查询 | fetch
添加数据 | insert
删除数据 | delete
更新数据 | update

#### 框架Framework

方法描述 | 方法名
---|---
输出json格式数据 | json



## 功能划分
负责人 | 功能 | 模块
---|---|--
孙晓军 | 登录注册 | Login 
郝雨凡 | 首页 | Index
白晓军 | 首页 | Index
丁宇 | 车管家 | Steward
任黎敏| 车友汇 |  Friend
郭建龙 | 个人中心 | Personal 

## 根目录
描述 | 文件名
--- | ---
Admin | php相关
Data | sql数据相关
public | react 需要的html
src | 开发目录
.gitignore |  git忽略文件
package.json | 项目配置文件
README.md | 工程描述文件

## 开发Src目录结构
    /-------------------
    |--- Static  公共base.scss icon
    |
    |--- Components  组件相关
    |
    |--- App.js  首页路由
    |
    |--- index.js  Root入口
    |
    |

## Components  目录结构
    /-------------------
    |--- Index   首页组件
    |
    |--- Steward  车管家组件
    |
    |--- Friend   车友汇组件
    |
    |--- Personal 个人中心组件
    |
    |--- Login  登录组件
    |
    |--- Common  公共组件
    |

## 各组件目录结构
    /-------------------
    |--- Css   组件需要样式
    |
    |--- Imgs  组件需要图片
    |
    |--- 组件1.js  组件js
    |
    |--- 组件2.js  组件js
    |
    |--- .....
    |

## 项目更新日志
> 2017-4-21 
1. 项目目录搭建
2. Tab路由切换
