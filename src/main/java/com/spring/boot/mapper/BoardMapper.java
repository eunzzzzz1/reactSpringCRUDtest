package com.spring.boot.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.spring.boot.dto.BoardDTO;

@Mapper
public interface BoardMapper {
	
	public int maxNum() throws Exception;
	public void insertData(BoardDTO dto) throws Exception;
	public int getDataCount(@Param("searchKey") String searchKey, @Param("searchValue") String searchValue) throws Exception;
	public List<BoardDTO> getList(@Param("start") int start, @Param("end") int end, @Param("searchKey") String searchKey, @Param("searchValue") String searchValue) throws Exception;
	public BoardDTO getReadData(int num) throws Exception;
	public void updateHitCount(int num) throws Exception;
	public void updateData(BoardDTO dto) throws Exception;
	public void deleteData(int num) throws Exception;

}
