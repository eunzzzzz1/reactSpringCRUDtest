import React, { useEffect, useState } from 'react';
import '../../assets/css/style.css'
import '../../assets/css/article.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Article() {

    const [data, setData] = useState({
        dto: [],
        lineSu: 1,
        params: 1,
        pageNum: 0,
    });

    const {subject, name, created, hitcount, content} = data.dto
    
      useEffect(() => {
       
        axios.get('/article')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return (
        <div className='bbs'>
            <div className='bbs_title' style={{textAlign:'center'}}>
                <p>⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡ 게시판 ⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡</p>
            </div>

            <div className='bbsArticle'>
                <div className='bbsArticle_header'>
                    {subject}
                </div>
                <div className='bbsArticle_bottomLine'>
                    <dl>
                        <dt> 작성자 </dt> <dd> 작성자이름 </dd>
                        <dt> 줄 수 </dt><dd> 줄수 </dd>
                    </dl>
                </div>
                
                <div className='bbsArticle_bottomLine'>
                    <dl>
                        <dt> 등록일 </dt> <dd> 2023.00.00 </dd>
                        <dt> 조회수 </dt><dd> 10 </dd>
                    </dl>
                </div>
                
                <div className='bbsArticle_content'>
                    <table style={{width:'600px', border:'1px solid #000'}}>
                        <tr><td style={{padding: '20px 80px 20px 0px', verticalAlign:'top', innerHeight:'200'}}>
                        <textarea rows={12} cols={63} name='content'
                            style={{paddingLeft: '20px', border: 'none', resize: 'none', backgroundColor: '#ffffff'}}
                            className='boxTA' disabled='disabled'>내용</textarea>
                        </td></tr>
                    </table>
                </div>
            </div>
            <div className='bbsArticle_noLine' style={{textAlign: 'right'}} >
                <p>From : 은지</p>
            </div>
            <div className='bbsArticle_footer'>
                
                <div className='leftFooter'>
                    <button className='btn2'>수정</button>
                    <button className='btn2'>삭제</button>
                </div>
                
                <div className='rightFooter'>
                <Link to="/list">
                    <button className='btn2'>리스트</button>
                </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Article;