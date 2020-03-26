/*
 * @author: 殷鹏飞
 * @Date: 2020-01-06 14:55:18
 * @information: 
 */
console.log( 5 && 4 );//当结果为真时，返回第二个为真的值4 
console.log( 0 && 4 );//当结果为假时，返回第一个为假的值0 
console.log( 5 || 4 );//当结果为真时，返回第一个为真的值5 
console.log( 0 || 0 );//当结果为假时，返回第二个为假的值0 
console.log((3||2)&&(5||0));//5 
console.log(!5);//false 