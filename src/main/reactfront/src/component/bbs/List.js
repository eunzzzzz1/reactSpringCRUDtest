import React from 'react';
import '../../assets/css/list.css'
import '../../assets/css/style.css'
import { Link, useNavigate } from "react-router-dom";

function List(){

    return (
        <div className="bbsList">
            <div className="bbsList_title">
                <p align="center">⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡ 게시판 ⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡</p>	
            </div>
            
            <div className="bbsList_header">
                <div className="leftHeader">
                <form action="" method="post" name="searchForm">
                    <select name="searchKey" class="selectField">
                        <option value="subject">제목</option>
                        <option value="name">작성자</option>
                        <option value="conten">내용</option>
                    </select>
                    <input type="text" name="searchValue" class="textField"/>
                    <input type="button" value="  검색  " class="btn2" onclick="sendIt();"/>
                </form>
                </div>
                
                <div className="rightHeader">
                    <Link to="/created">
                        <input type="button" value=" 글 올리기 " class="btn2"/>
                    </Link>
                    {/* <input type="button" value=" 글 올리기 " class="btn2" onclick="location='/created';"/> */}
                </div>
            </div>
            
            <div className="bbsList_list">
                <table>
                    <thead className="title"><tr>
                        <th class="num">번호</th>
                        <th class="subject">제목</th>
                        <th class="name">이름</th>
                        <th class="created">작성일</th>
                        <th class="hitCount">조회수</th>
                    </tr></thead>
                
                    <tbody className="lists">
                        <tr>
                            <td class="num">번호</td>
                            <td class="subject">
                                <a href="">제목</a></td>
                            <td class="name">이름</td>
                            <td class="created">작성날짜</td>
                            <td class="hitCount">조회수</td>
                        </tr>
                        <tr>
                            <td colspan="5" className="footer">
                                <a>1 2 3 4 5</a></td>
                        </tr>
                        <tr>
                            <td colspan="5" className="footer">
                                등록된 게시글이 없습니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default List;