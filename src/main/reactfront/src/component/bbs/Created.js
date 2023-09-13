import React from 'react';
import '../../assets/css/style.css'
import '../../assets/css/created.css'
import { Link, useNavigate } from "react-router-dom";

function Created() {

    return (
        <div className="bbs">
            <div className="bbs_title">
                <p align="center">⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡ 게시판 ⋆｡♡ﾟ☁︎ ⋆｡ ﾟ☁︎ ﾟ｡♡⋆｡</p>
            </div>
            
            <form>
            <div className="bbsCreated">
                <div class="bbsCreated_bottomLine">
                    <dl>
                        <dt> 제&nbsp;&nbsp;&nbsp;&nbsp;목 </dt>
                        <dd>
                        <input type="text" name="subject" size="60" maxlength="100" class="boxTF"/>
                        </dd>
                    </dl>
                </div>
            
            
                <div class="bbsCreated_bottomLine">
                    <dl>
                        <dt> 작성자 </dt>
                        <dd>
                        <input type="text" name="name" size="35" maxlength="20" class="boxTF"/>
                        </dd>
                    </dl>
                </div>

                <div class="bbsCreated_bottomLine">
                    <dl>
                        <dt> 이메일 </dt>
                        <dd>
                        <input type="text" name="email" size="35" maxlength="50" class="boxTF"/>
                        </dd>
                    </dl>
                </div>
                
                <div className="bbsCreated_content">
                    <dl>
                        <dt> 내&nbsp;&nbsp;&nbsp;&nbsp;용 </dt>
                        <dd>
                        <textarea rows="12" cols="63" name="content" class="boxTA" style={{resize: 'none', backgroundColor: '#ffffff'}}></textarea>
                        </dd>
                    </dl>
                </div>

                <div class="bbsCreated_noLine">
                    <dl>
                        <dt> 패스워드 </dt>
                        <dd>
                        <input type="password" name="pwd" size="35" maxlength="7" class="boxTF"/>&nbsp;(게시물 수정 삭제 시 필요)
                        </dd>
                    </dl>
                </div>		
            </div>
            
            <div className="bbsCreated_footer">
                <button className='btn2'>등록하기</button>
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