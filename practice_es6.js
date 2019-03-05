// findとforループでの探索メソッド
// 見つかった最初の要素を返す
// var users = [
//   { name: '太郎' },
//   { name: '次郎' },
//   { name: '三郎' },
//  ];
//
// var user;
//
// for (var i =0; i < users.length; i ++ ) {
//   if (users[i].name === '次郎') {
//     user = users[i];
//     break;
//   }
// }
//
// users.find(function(user) {
//   return user.name === '次郎';
// });
//
// user;


// 配列と条件を受け取り検索結果を返すメソッド
// Object.keys(criteria)で検索条件のキーを取得できる
// function findWhere(array, criteria) {
//     var key = Object.keys(criteria);
//     return array.find(function(el) {
//         return el[key] === criteria[key];
//     });
// }
