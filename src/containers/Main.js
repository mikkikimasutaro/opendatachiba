import './Main.css';
import React from 'react';

import Typography from '@mui/material/Typography';
import MenuItem from '../components/MenuItem';

function Main() {

    return (
        <div style={{ width: '100%' }}>
            <h2>千葉県の人口・労働・経済等のデータを見やすくまとめ</h2>
            <div >
             <img src="0009_r.png" alt="Logo" />
             <MenuItem />
                <Typography component="p" >
                        千葉県が公開するオープンデータを閲覧できるページです。データは <a href="https://www.pref.chiba.lg.jp/gyoukaku/opendata/index.html" target="_blank" rel="noopener noreferrer">千葉県オープンデータサイト</a>　から取得しています。
                </Typography>
            </div>
        </div>
    );
}


export default Main;