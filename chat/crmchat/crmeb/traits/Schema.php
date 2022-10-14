<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace crmeb\utils;


use think\migration\Migrator;

/**
 * Trait Schema
 * @package crmeb\utils
 * @mixin Migrator
 */
trait Schema
{

    public function create(string $table, \Closure $callback)
    {
        $table = $this->table($table);

        $blueprint = new Blueprint($table);

        $callback($blueprint);

        $table->setEngine($blueprint->engine);
        $table->setCollation($blueprint->collation);
        $table->setComment($blueprint->comment);

        $table->create();
    }
}
