<?php

use think\migration\Migrator;
use think\migration\db\Column;

class ChatComplain extends Migrator
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table = $this->table('chat_complain', ['comment' => '用户投诉']);
        $table->addColumn('content', 'string', ['limit' => 100, 'default' => '', 'comment' => '投诉内容']);
        $table->addColumn('user_id', 'integer', ['limit' => 10, 'default' => 0, 'comment' => '用户表ID']);
        $table->addColumn('cate_id', 'integer', ['limit' => 10, 'default' => 0, 'comment' => '分类']);
        $table->addColumn('create_time', 'timestamp', ['default' => 'CURRENT_TIMESTAMP', 'update' => '']);
        $table->addIndex('cate_id');
        $table->create();
    }
}
