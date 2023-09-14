import React, { useEffect, useState } from 'react';
import '../../assets/css/style.css'
import '../../assets/css/article.css'
import { Link, useNavigate, useParams } from "react-router-dom";

function Article({datalist}) {

    const {number}  = useParams()
    // const [article,setArticle] = useState()
    const article = datalist.find(item=>item.num===Number(number))

    const {subject, name, created, hitCount, content} = article

    console.log(article)

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
                        <dt> 작성자 </dt> <dd> {name} </dd>
                        <dt> 줄 수 </dt><dd> 줄수 </dd>
                    </dl>
                </div>
                
                <div className='bbsArticle_bottomLine'>
                    <dl>
                        <dt> 등록일 </dt> <dd> {created} </dd>
                        <dt> 조회수 </dt><dd> {hitCount} </dd>
                    </dl>
                </div>
                
                <div className='bbsArticle_content'>
                    <table style={{width:'600px', border:'1px solid #000'}}>
                        <tr><td style={{padding: '20px 80px 20px 0px', verticalAlign:'top', innerHeight:'200'}}>
                        <textarea rows={12} cols={63} name='content'
                            style={{paddingLeft: '20px', border: 'none', resize: 'none', backgroundColor: '#ffffff'}}
                            className='boxTA' disabled='disabled'>{content}</textarea>
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