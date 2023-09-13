package com.spring.boot;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@SpringBootApplication
public class SpringBootBoardApplication {

	@Autowired
	ApplicationContext applicationContext;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootBoardApplication.class, args);
	}
	
	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
		
		SqlSessionFactoryBean sessionFactoryBean = new SqlSessionFactoryBean();
		
		sessionFactoryBean.setDataSource(dataSource);
		
		/*
		//sql의 위치정보 읽어오기 (org.springframework.core.io.Resource)
		Resource[] resources = new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/mapper/*.xml");
														// src/main/resource/mybatis/mapper 폴더에 있는 xml파일들을 읽어낼 것
		sessionFactoryBean.setMapperLocations(resources);
			// SessionFactory의 객체 내에는 dataSource와 sql이 담긴 resource가 담김
		*/
		
		sessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:mybatis/mapper/*.xml"));
		
		return sessionFactoryBean.getObject(); // 객체화 시켜서 내보내기
		
	}

}
