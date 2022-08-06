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
                        Find AWS Open Dataとは
                </Typography>
                <Typography component="p" >
                        AWSが公開するオープンデータをキーワードで検索できるページです。データは <a href="https://github.com/awslabs/open-data-registry">AWS LAB repogitory pages</a>　から取得しています。
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