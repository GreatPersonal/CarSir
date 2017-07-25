<?php
namespace Controller;
use Core\Framework;
use Model\essaymodel;
class essaycontroller extends Framework{
    public $e;
    function __construct()
    {
        require MODEL.'essaymodel.php';
        $this->e = new essaymodel();
    }

    function index(){
       return $this->json($this->e->getall());
    }
    function lists(){

        return $this->json($this->e->itemlist($_GET['esid']));
    }
}
