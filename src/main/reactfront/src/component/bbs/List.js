import React, { useEffect, useState } from 'react';
import '../../assets/css/list.css'
import '../../assets/css/style.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function List({data}){

    // // list 컨트롤러에서 데이터 받아오기
    // const [data, setData] = useState({
    //     lists: [],
    //     currentPage: 1,
    //     totalPage: 1,
    //     dataCount: 0,
    // });
    
      
    //   useEffect(() => {
       
    //     axios.get('/list')
    //       .then((response) => {
    //         setData(response.data);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }, []);
        


    return (
        <div className="bbsList">
            <div className="bbsList_title">
                <p align="center">⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡ 게시판 ⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡</p>	
            </div>
            
            <div className="bbsList_header">
                <div className="leftHeader">
                <form>
                    <select name='searchKey' class="selectField">
                        <option value='subject'>제목</option>
                        <option value='name'>작성자</option>
                        <option value='content'>내용</option>
                    </select>
                    <input type="text" name='searchValue' className="textField"/>
                    <button className='btn2'>검색</button>
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
                        <th className="num">번호</th>
                        <th className="subject">제목</th>
                        <th className="name">이름</th>
                        <th className="created">작성일</th>
                        <th className="hitCount">조회수</th>
                    </tr></thead>
                
                    <tbody className="lists">

                        {
                            data.lists.map((item, index) => (
                            <tr key={index}>
                                <td className="num">{data.dataCount-index}</td>
                                <td className="subject">
                                    <Link to={`/article/${item.num}`}> {item.subject} </Link></td> 
                                <td className="name">{item.name}</td>
                                <td className="created">{item.created}</td>
                                <td className="hitCount">{item.hitCount}</td>
                            </tr>
                            )) 
                        }
                        
                        {
                            (data.dataCount>0)?
                                (<tr>
                                <td colspan="5" className="footer">
                                    {/* <a>1 2 3 4 5</a> */}
                                    1 2 3 4 5 </td>
                                </tr>):
                                (<tr>
                                    <td colspan="5" className="footer">
                                        등록된 게시글이 없습니다.</td>
                                </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default List;