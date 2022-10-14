package com.ruoyi.framework.config;

import com.ruoyi.common.utils.StringUtils;
import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * redisson配置
 *
 * @author ruoyi
 */
@Configuration
public class RedissonConfig
{
    @Value("${spring.redis.host}")
    private String host;

    @Value("${spring.redis.port}")
    private String port;

    @Value("${spring.redis.password}")
    private String password;

    @Value("${spring.redis.database}")
    private Integer database;

    @Bean(destroyMethod = "shutdown")
    @ConditionalOnMissingBean(RedissonClient.class)
    public RedissonClient redissonClient()
    {
        Config config = new Config();
        config.useSingleServer().setAddress("redis://" + host + ":" + port); // 更多.set
        if (StringUtils.isNotBlank(password)) {
            config.useSingleServer().setPassword(password);
        }
        config.useSingleServer().setDatabase(database);
        return Redisson.create(config);
    }
}