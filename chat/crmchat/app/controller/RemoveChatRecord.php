<?php


namespace app\controller;

use think\facade\Request;
use app\dao\chat\ChatServiceDialogueRecordDao;

class RemoveChatRecord
{

    protected $dao;

    public function __construct(ChatServiceDialogueRecordDao $dao)
    {
        $this->dao = $dao;
    }

    public function remove(){
        $key = Request::param('key');
        if(!$key || $key !== 'uilh1@#$#_-~~el34jHFK:P'){
            return "失败";
        }
        $this->dao->removeChat();
        return "完成!";
    }
}