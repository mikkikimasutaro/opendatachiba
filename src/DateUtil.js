// 日付をYYYY-MM-DDの書式で返すメソッド
export function formatDate(dt) {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth()+1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '/' + m + '/' + d);
  }
  
  // 指定した日付からN日後の日付を返却
export function getAfterNdays(date,n){
    var dt = new Date(date);
    dt.setDate(dt.getDate()+n);
    return formatDate(dt);
  }
  
 export function getDateDiff(dateString1, dateString2) {
    // 日付を表す文字列から日付オブジェクトを生成
    var date1 = new Date(dateString1);
    var date2 = new Date(dateString2);
    // 2つの日付の差分（ミリ秒）を計算
    var msDiff  = date1.getTime() - date2.getTime();
    // 求めた差分（ミリ秒）を日付に変換
    // 差分÷(1000ミリ秒×60秒×60分×24時間)
    return Math.ceil(msDiff / (1000 * 60 * 60 *24));
  }

 export default null;