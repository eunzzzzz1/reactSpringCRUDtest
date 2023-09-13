package com.spring.boot.controller;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.spring.boot.dto.BoardDTO;
import com.spring.boot.service.BoardService;
import com.spring.boot.util.MyUtil;

@RestController
public class BoardController {
	
	@Resource
	private BoardService boardService;

	@Autowired
	MyUtil myUtil;
	
	@RequestMapping(value="/")
	public ModelAndView index() throws Exception {
		// 반환값을 ModelAndView로 하면, @ResponceBody를 써주지 않아도 리턴값을 텍스트로 인식하지 않는다.
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index");
		return modelAndView;
	}

	@GetMapping("/list")
	public Map<String, Object> getListData(HttpServletRequest request) throws Exception{
		
		
		String pageNum = request.getParameter("pageNum");
		
		int currentPage = 1;
		
		if(pageNum!=null) {
			currentPage = Integer.parseInt(pageNum);
		}
		
		String searchKey  = request.getParameter("searchKey");
		String searchValue = request.getParameter("searchValue");
		
		if(searchValue==null) {
			searchKey = "subject";
			searchValue = "";
		}else {
			if(request.getMethod().equalsIgnoreCase("GET")) {
				searchValue = URLDecoder.decode(searchValue, "UTF-8");
			}
		}
		
		int dataCount = boardService.getDataCount(searchKey, searchValue);
		
		int numPerPage = 5;
		int totalPage = myUtil.getPageCount(numPerPage, dataCount);
		
		if(currentPage>totalPage) {
			currentPage = totalPage;
		}
		
		int start = (currentPage-1)*numPerPage+1;
		int end = currentPage*numPerPage;
		
		List<BoardDTO> lists = boardService.getList(start, end, searchKey, searchValue);
		
		String param = "";
		
		if(searchValue!=null&&!searchValue.equals("")) {
			param = "searchKey=" + searchKey;
			param+= "&searchValue=" + URLEncoder.encode(searchValue,"UTF-8");
		}
		
		String listUrl = "/list.action";
		
		if(!param.equals("")) {
			listUrl = listUrl + "?" + param;
		}
		
		String pageIndexList = myUtil.pageIndexList(currentPage, totalPage, listUrl);
		
		
		String articleUrl = "/article.action?pageNum=" + currentPage;
		
		if(!param.equals("")) {
			articleUrl = articleUrl + "&" + param;
		}
		
	
		
		Map<String, Object> result = new HashMap<>();
        result.put("lists", lists);
        result.put("currentPage", pageNum);
        result.put("totalPage", totalPage);
        result.put("dataCount", dataCount);
		
		
		
		return result;
	}

	
	
	// /**
	//  * List 메소드 <br>
	//  * 검색기능은 Post로 처리되기 때문에, method에 get과 post 둘 다
	//  * @return
	//  * @throws Exception
	//  */
	// @RequestMapping(value = "/list", method = {RequestMethod.GET,RequestMethod.POST})
	// //@GetMapping("/list")
	// public ModelAndView list(HttpServletRequest request) throws Exception {
		
		
	// 	// 페이징 처리
	// 	String pageNum = request.getParameter("pageNum");
	// 	int currentPage = 1; // 처음 실행했을 땐 1페이지
	// 	if(pageNum!=null) { // pageNum이 빈 값이 아니면 => 즉 사용자가 원하는 페이지를 넘겼을 때
	// 		currentPage = Integer.parseInt(pageNum);
	// 	}
		
	// 	//검색
	// 	String searchKey = request.getParameter("searchKey");
	// 	String searchValue = request.getParameter("searchValue");
		
	// 	if(searchValue==null) {
	// 		searchKey="subject";
	// 		searchValue="";
	// 	} else {
	// 		// 사용자가 검색을 했을 때
	// 		if(request.getMethod().equalsIgnoreCase("get")) {
	// 			searchValue = URLDecoder.decode(searchValue,"UTF-8");
	// 		}
	// 	}
		
	// 		// 전체데이터개수
	// 	int dataCount = boardService.getDataCount(searchKey, searchValue);
			
	// 	int numPerPage = 5; // 페이지에 출력할 게시글의 개수
	// 	int totalPage = myUtil.getPageCount(numPerPage, dataCount); // 전체 페이지 개수
		
		
	// 	if(currentPage>totalPage) {
	// 		currentPage=totalPage;
	// 	}
		
	// 		// 한 페이지의 시작rownum, 끝rownum
	// 	int start = (currentPage-1)*numPerPage+1;
	// 	int end = currentPage*numPerPage;
		
		
	// 	// 한 페이지 내 게시글 리스트
	// 	List<BoardDTO> lists = boardService.getList(start, end, searchKey, searchValue);
		
		
	// 	String param ="";
	// 	if(searchValue!=null && !searchValue.equals("")) {
	// 		param = "searchKey=" + searchKey;
	// 		param += "&searchValue=" + URLEncoder.encode(searchValue,"UTF-8");
	// 	}
		
	// 	String listUrl = "/list";
		
	// 	if(!param.equals("")) {
	// 		listUrl += "?" + param;
	// 	}
		
	// 	String pageIndexList = myUtil.pageIndexList(currentPage, totalPage, listUrl);
		
		
	// 	// 게시글 제목에 게시글 내용을 볼 수 있는 article 링크 걸어주기
	// 	String articleUrl = "/article?pageNum=" + currentPage;
		
	// 	if(!param.equals("")) {
	// 		articleUrl = articleUrl + "&" + param;
	// 	}

	// 	ModelAndView modelAndView = new ModelAndView();
	// 	modelAndView.setViewName("bbs/list");
		
	// 	//포워딩할 데이터
	// 	modelAndView.addObject("lists", lists);
	// 	modelAndView.addObject("pageIndexList", pageIndexList);
	// 	modelAndView.addObject("dataCount", dataCount);
	// 	modelAndView.addObject("articleUrl", articleUrl);
		
	// 	return modelAndView;
		
	// }
	
	//@RequestMapping(value = "/created", method = RequestMethod.GET)
	@GetMapping("/created")
	public ModelAndView created() throws Exception {
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("bbs/created");
		return modelAndView;
		
	}
	
	//@RequestMapping(value = "/created", method = RequestMethod.POST)
	@PostMapping("/created")
	public ModelAndView created_ok(BoardDTO dto, HttpServletRequest request) throws Exception {
			// 사용자의 폼 입력값이 담긴 dto
		ModelAndView modelAndView = new ModelAndView();

		int maxNum = boardService.maxNum();
		
		dto.setNum(maxNum+1);
		dto.setIpAddr(request.getRemoteAddr());
		
		boardService.insertData(dto);
		
		modelAndView.setViewName("redirect:/list");
		return modelAndView;
		
	}
	
	//@RequestMapping(value = "/article", method = {RequestMethod.GET,RequestMethod.POST})
	// public ModelAndView article(HttpServletRequest request) throws Exception {
	@GetMapping("/article")
	public Map<String, Object> article(HttpServletRequest request) throws Exception {
		
		String url = "";
		
		//검색 X시 pageNum과 num이 넘어오고, 검색 O시 searchKey searchValue까지 함께 넘어온다.
		int num = Integer.parseInt(request.getParameter("num"));
		// String pageNum = request.getParameter("pageNum");
		String pageNum = "1";
		
		String searchKey = request.getParameter("searchKey");
		String searchValue = request.getParameter("searchValue");
		
		if(searchValue!=null) {
			searchValue = URLDecoder.decode(searchValue,"UTF-8");
		} else {
			searchKey = "subject";
			searchValue = "";
		}
		
		// 조회수 증가
		//System.out.println(num);
		boardService.updateHitCount(num);

		BoardDTO dto = boardService.getReadData(num); // 게시글 DTO에 받아오기
		
		if(dto == null) {
			/**----------------------------------------
			 * 반환값 String 방식
			 * ----------------------------------------
			 */
//			url = cp + "/list";
//			response.sendRedirect(url);
			
			/**----------------------------------------
			 * 반환값 ModelAndView 방식
			 * ----------------------------------------
			 */
			ModelAndView mav = new ModelAndView();
			mav.setViewName("redirect:/list?pageNum=" + pageNum);
		}
		
		// 라인 수
		int lineSu = dto.getContent().split("\n").length;
		//dto.setContent(dto.getContent().replaceAll("\n", "<br/>"));
		
		
		
		
		String param = "pageNum=" + pageNum;
		if(searchValue!=null && !searchValue.equals("")) { // 검색 했을 경우
			
			param += "&searchKey=" + searchKey
						+ "&searchValue=" + URLEncoder.encode(searchValue,"UTF-8");
		}
		
		/**----------------------------------------
		 * 반환값 String
		 * ----------------------------------------
		 */
//		request.setAttribute("dto", dto);
//		request.setAttribute("lineSu", lineSu);
//		request.setAttribute("params", param);
//		request.setAttribute("pageNum", pageNum);
		
//		return "bbs/article";
		
		/**----------------------------------------
		 * 반환값 ModelAndView 방식
		 * ----------------------------------------
		 */
		
		Map<String, Object> result = new HashMap<>();
        result.put("dto",dto);
        result.put("lineSu", lineSu);
        result.put("params", param);
        result.put("pageNum", pageNum);
		
		// ModelAndView mav = new ModelAndView();
		// // 넘어가는 데이터
		// mav.addObject("dto",dto); // request.setAttribute() 대신 ModelAndView 객체에 담아 넘긴다.
		// mav.addObject("lineSu", lineSu);
		// mav.addObject("params", param);
		// mav.addObject("pageNum", pageNum);
		
		// mav.setViewName("bbs/article");
		
		return result;
		
	}
	
	//@RequestMapping(value = "/updated", method = {RequestMethod.GET,RequestMethod.POST})
	@GetMapping("/updated")
	public ModelAndView updated(HttpServletRequest request) throws Exception {
		
		String url = "";
		
		int num = Integer.parseInt(request.getParameter("num"));
		String pageNum = request.getParameter("pageNum");
		String searchKey = request.getParameter("searchKey");
		String searchValue = request.getParameter("searchValue");
		
		if(searchValue!=null) {
			searchValue = URLDecoder.decode(searchValue,"UTF-8");
		}
		
		BoardDTO dto = boardService.getReadData(num);
		
		if(dto==null) {
			ModelAndView mav = new ModelAndView();
			mav.setViewName("redirect:/list?pageNum=" + pageNum);
		}
		
		String param = "pageNum=" + pageNum;
		
		if(searchValue!=null && !searchValue.equals("")) {
			param += "&searchKey=" + searchKey;
			param += "&searchValue=" + URLEncoder.encode(searchValue,"UTF-8");
		}
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("bbs/updated");
		
		mav.addObject("dto", dto);
		mav.addObject("pageNum", pageNum);
		mav.addObject("params", param);
		mav.addObject("searchKey", searchKey);
		mav.addObject("searchValue", searchValue);
		
		
		return mav;
		
	}

	//@RequestMapping(value = "/updated_ok", method = {RequestMethod.GET,RequestMethod.POST})
	@GetMapping("/updated_ok")
	public ModelAndView updated(BoardDTO dto, HttpServletRequest request) throws Exception {
		
		String pageNum = request.getParameter("pageNum");
		String searchKey = request.getParameter("searchKey");
		String searchValue = request.getParameter("searchValue");

		boardService.updateData(dto);
		String param = "pageNum=" + pageNum;
		if(!searchValue.equals("")&&searchValue!=null) {
			param += "&searchKey=" + searchKey;
			param += "&searchValue=" + searchValue;

		}
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("redirect:/list?" + param);
		
		return mav;
		
		
	}
	
	//@RequestMapping(value = "/deleted", method = {RequestMethod.GET,RequestMethod.POST})
	@GetMapping("/deleted")
	public ModelAndView deleted(HttpServletRequest request) throws Exception {
		
		int num = Integer.parseInt(request.getParameter("num"));
		String pageNum = request.getParameter("pageNum");
		String searchKey = request.getParameter("searchKey");
		String searchValue = request.getParameter("searchValue");

		boardService.deleteData(num);
		String param = "pageNum=" + pageNum;
		if(searchValue!=null && !searchValue.equals("")) {
			param += "&searchKey=" + searchKey;
			param += "&searchValue=" + searchValue;

		}
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("redirect:/list?" + param);
		
		return mav;
		
		
	}
	
}
