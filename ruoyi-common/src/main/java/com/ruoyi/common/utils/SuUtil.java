package com.ruoyi.common.utils;

import org.apache.commons.io.FileUtils;
import org.lionsoul.ip2region.DataBlock;
import org.lionsoul.ip2region.DbConfig;
import org.lionsoul.ip2region.DbSearcher;
import org.lionsoul.ip2region.Util;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.InputStream;
import java.lang.reflect.Field;

import java.lang.reflect.Method;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class SuUtil {

    /**
     * 账号类型
     */
    public static class UserType{
        /**
         * 后台
         */
        public static String Sys="00";
        /***
         * 代理
         */
        public static String Agent="01";
    }

    public static String getIpAddress(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

    /**
     *
     *
     * @return 当天的零点时间戳
     */
    public static long getTodayStartTime() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        return calendar.getTime().getTime();
    }

    /**
     *java对象转成Map集合
     */
    public static Map<String, Object> objectToMap(Object obj) throws IllegalAccessException {
        Map<String, Object> map = new HashMap<String, Object>();
        Class<?> clazz = obj.getClass();
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            String fieldName = field.getName();
            Object value = field.get(obj);
            map.put(fieldName, value);
        }
        return map;
    }

    public static String getCityInfo(String ip) throws Exception {
        //获得文件流时，因为读取的文件是在打好jar文件里面，不能直接通过文件资源路径拿到文件，但是可以在jar包中拿到文件流
        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Resource[] resources = resolver.getResources("ip2region.db");
        Resource resource = resources[0];
        InputStream is = resource.getInputStream();
        File target = new File("ip2region.db");
        FileUtils.copyInputStreamToFile(is, target);
        is.close();
        if (StringUtils.isEmpty(String.valueOf(target))) {
            System.out.println("Error: Invalid ip2region.db file");
            return null;
        }
        DbConfig config = new DbConfig();
        DbSearcher searcher = new DbSearcher(config, String.valueOf(target));
        //查询算法
        //B-tree, B树搜索（更快）
        int algorithm = DbSearcher.BTREE_ALGORITHM;
        try {
            //define the method
            Method method;
            method = searcher.getClass().getMethod("btreeSearch", String.class);
            DataBlock dataBlock;
            if (!Util.isIpAddress(ip)) {
                System.out.println("Error: Invalid ip address");
            }
            dataBlock = (DataBlock) method.invoke(searcher, ip);
            String ipInfo = dataBlock.getRegion();
            if (!StringUtils.isEmpty(ipInfo)) {
                ipInfo = ipInfo.replace("|0", "");
                ipInfo = ipInfo.replace("0|", "");
            }
            return ipInfo;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String getIpPossession(String ip) throws Exception {
        String cityInfo = getCityInfo(ip);
        if (!StringUtils.isEmpty(cityInfo)) {
            cityInfo = cityInfo.replace("|", " ");
            String[] cityList = cityInfo.split(" ");
            if (cityList.length > 0) {
                // 国内的显示到具体的省
                if ("中国".equals(cityList[0])) {
                    if (cityList.length > 1) {
                        return cityList[1];
                    }
                }
                // 国外显示到国家
                return cityList[0];
            }
        }
        return "未知";
    }

}
