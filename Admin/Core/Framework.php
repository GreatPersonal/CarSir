<?php
namespace Core;
class Framework
{
    public $arr;
//    start： 启动获取url中的数组项目，按照数组进行对象实例化，调用处理方法
    public static function start(){
        $url = explode('/',explode("?",$_SERVER["REQUEST_URI"])[0]);
        $c = $url[1].'controller';
        $m = isset($url[2])?$url[2]:'index';
        $file = CONTROLLER.$c.'.php';
        if(file_exists($file)){
            require $file;
            $class_file = "\\Controller\\".$c;
            if(class_exists($class_file) && method_exists($class_file,$m)){
                $con = new $class_file();
                $con->$m();
            }else{
                echo "php not found";
            }
        }else{

            echo "404 not found";
        }
    }
//    session   设置session
    function session($k,$v){
        session_start();
        $_SESSION[$k] = $v;
    }
//    json 设置发起请求的格式   然后将转换好格式的数据 发回
    function json($value){
            header('Content-Type:text/json');
            echo json_encode($value);

    }
}