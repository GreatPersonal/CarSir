<?php
namespace model;
class essaymodel extends \Core\DBPDO{
    function getall(){
        return $this->fetchAll('SELECT * FROM user,essay WHERE user.id = essay.u_id');
    }
//    分类查询文章列表
    function itemlist($id){
        return $this->fetchAll("SELECT * FROM user,essay WHERE user.id = essay.u_id AND essay.c_id=".$id);

    }
}