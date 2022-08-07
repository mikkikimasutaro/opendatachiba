import React from 'react';

import Typography from '@mui/material/Typography';

function PrivacyPolicy() {

    return (
        <div style={{ width: '100%' }}>
            <h1>プライバシーポリシー</h1>
            <h2>私たちのサイト、および権利について</h2>
            <Typography component="p" >
            私たちのサイトアドレスは https://opendatachiba.mikkikimasu.com です。
            私たちのサイトにおけるコンテンツの著作権はこのサイトの運営者である私たちに帰属します。
            </Typography>
            <h2>お問い合わせ</h2>
            <Typography component="p" >
            お問い合わせに・ご意見ついては、以下のフォームよりお願いいたします。
お問い合わせいただいた内容に含まれる個人情報につきましては、法律に違反する場合や公序良俗に反する場合を除き、第三者への提供はいたしません。
            </Typography>
            <iframe title="inquiry" src="https://docs.google.com/forms/d/e/1FAIpQLScNSeiK9F0WviGrf-8h_UPHDy3yE6pWMJT0Az1sMX2s-gKutw/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>

        </div>
    );
}


export default PrivacyPolicy;