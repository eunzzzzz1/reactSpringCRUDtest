import React, { useState } from 'react';
import '../../assets/css/style.css'
import '../../assets/css/created.css'
import { Link, redirect, useNavigate } from "react-router-dom";

function Created({onAdd}) {

    const [form,setForm] = useState({
        // 제목 subject, 작성자 name, 이메일 email, 내용 content, 패스워드 pwd
        subject:'',
        name:'',
        email:'',
        content:'',
        pwd:'',
        ipAddr:'',
        created:'',
        hitCount:0
    })

    const {subject, name, email, content, pwd} = form

    // input 요소에 값이 입력될 때마다 form 객체를 세팅
    const changeInput = (evt) => {
        const {value, name} = evt.target
        setForm({
            ...form,
            [name]:value,
            ipAddr:'',
            created:'',
            hitCount:0
        })
    }

    const navi = useNavigate()

    const onSubmit = (evt) => {
        evt.preventDefault()
        if(!subject || !name || !email || !content || !pwd) return
        onAdd(form)
        setForm({
            subject:'',
            name:'',
            email:'',
            content:'',
            pwd:''
        })
        // Link("/list")
        // redirect("/list") // 둘 다 안됨
        // navi("/article/", { replace: true }) 새로고침이 되지않음
        window.location.replace("/list")
    }
 


    return (
        <div className="bbs">
            <div className="bbs_title">
                <p align="center">⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡ 게시판 ⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡</p>
            </div>
            
            <form onSubmit={onSubmit}>
            <div className="bbsCreated">
                <div className="bbsCreated_bottomLine">
                    <dl>
                        <dt> 제&nbsp;&nbsp;&nbsp;&nbsp;목 </dt>
                        <dd>
                        <input type="text" name="subject" value={subject} size="60" maxlength="100" className="boxTF"
                            onChange={changeInput}/>
                        </dd>
                    </dl>
                </div>
            
            
                <div className="bbsCreated_bottomLine">
                    <dl>
                        <dt> 작성자 </dt>
                        <dd>
                        <input type="text" name="name" value={name} size="35" maxlength="20" className="boxTF" onChange={changeInput}/>
                        </dd>
                    </dl>
                </div>

                <div className="bbsCreated_bottomLine">
                    <dl>
                        <dt> 이메일 </dt>
                        <dd>
                        <input type="text" name="email" value={email} size="35" maxlength="50" className="boxTF" onChange={changeInput}/>
                        </dd>
                    </dl>
                </div>
                
                <div className="bbsCreated_content">
                    <dl>
                        <dt> 내&nbsp;&nbsp;&nbsp;&nbsp;용 </dt>
                        <dd>
                        <textarea rows="12" cols="63" name="content" class="boxTA"
                            onChange={changeInput} style={{resize: 'none', backgroundColor: '#ffffff'}}>{content}</textarea>
                        </dd>
                    </dl>
                </div>

                <div className="bbsCreated_noLine">
                    <dl>
                        <dt> 패스워드 </dt>
                        <dd>
                        <input type="password" name="pwd" value={pwd} size="35" maxlength="7" className="boxTF" onChange={changeInput}/>&nbsp;(게시물 수정 삭제 시 필요)
                        </dd>
                    </dl>
                </div>		
            </div>
            
            <div className="bbsCreated_footer">
                <button className='btn2' type='submit' onClick={onSubmit}>등록하기</button>
                <button className='btn2'>다시입력</button>
                <Link to='/list'>
                    <button className='btn2'>작성취소</button>
                </Link>
            </div>
            
            </form>
        </div>
    );
};

export default Created;