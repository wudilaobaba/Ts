package com.whj.axiosserver.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {
    static final String ORIGINS[] = new String[] { "GET", "POST", "PUT", "DELETE" };
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.
                addMapping("/v1/**"). //后端路由
                allowedOrigins("http://localhost:3000"). //(前端域名)
                allowCredentials(true).
                allowedMethods(ORIGINS).
                maxAge(3600);
    }
}
