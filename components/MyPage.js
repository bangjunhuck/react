import React from 'react';
import { useNavigate } from 'react-router-dom';


const Register = ({changeUserName, changeMode}) =>{

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // 여기서 '/'는 원래 페이지의 경로로 변경해야 할 경로입니다.
        navigate('/');
      }

    return (
        <div>
            <section className="sub_wrap" >
                <article className="s_cnt re_1 ct1">
                    <div className="li_top">
                        <h2 className="s_tit1" style={{textAlign: "center"}} >마이페이지</h2>
                        <form action='/Register' method="post" name="frm">
                            <div className="re1_wrap">
                                <div className="re_cnt ct2">
                                    <table className="table_ty1">
                                        <div><img src={require("../img/main/mv1.jpg")} height="500px" width="500px" alt=""/></div>
                                    </table>
                                </div>
                            </div>
                            <div className="btn_confirm">
                            <button className="bt_ty bt_ty2 submit_ty1" type="submit" onClick={handleRegister}>
                                돌아가기
                            </button>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Register;