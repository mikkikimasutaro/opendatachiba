import './Info.css';
import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Info() {

    return (
        <div>
            <h2>このサイトについて</h2>
            <div >
                <Paper className="paper">
                <Typography variant="headline" component="h3" >
                        千葉県オープンデータとは
                </Typography>
                <Typography component="p" >
                        千葉県が公開するオープンデータを閲覧できるページです。データは <a href="https://www.pref.chiba.lg.jp/gyoukaku/opendata/index.html" target="_blank" rel="noopener noreferrer">千葉県オープンデータサイト</a>　から取得しています。
                </Typography>
                </Paper>
                <Paper className="paper">
                <Typography variant="headline" component="h3">
                        本アプリの目的
                </Typography>
                <Typography component="p" >
                        このアプリは、React ＋　AWS Amplify（＋App Sync,DynamoDB）で構成されており、これらの技術を用いてSingle Page Applicationを作成するためのサンプルとして作成しました。                        
                </Typography>
                </Paper>
                <Paper className="paper">
                <Typography variant="headline" component="h3">
                        ソースコード・説明など
                </Typography>
                <Typography component="p" >
                        ソースコード：<a href="https://github.com/mikkikimasutaro/findawsopendata">Github</a>
                </Typography>
                </Paper>
            </div>
        </div>
    );
}


export default Info;