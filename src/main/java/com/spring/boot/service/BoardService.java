package com.spring.boot.service;

import java.util.List;

import com.spring.boot.dto.BoardDTO;

public interface BoardService {

	public int maxNum() throws Exception;
	public void insertData(BoardDTO dto) throws Exception;
	public int getDataCount(String searchKey, String searchValue) throws Exception;
	public List<BoardDTO> getList(int start, int end, String searchKey, String searchValue) throws Exception;
	public BoardDTO getReadData(int num) throws Exception;
	public void updateHitCount(int num) throws Exception;
	public void updateData(BoardDTO dto) throws Exception;
	public void deleteData(int num) throws Exception;
}
