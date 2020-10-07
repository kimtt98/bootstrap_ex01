//bai1
var x, y;

var sum = x + y;
var sub = x - y;
var mul = x * y;
var div = x / y;

//bai2 khhai bao doi tuogn---------
var fullName = "Tran trong kim";
var age = 19;
var isMale = true;
//bai3  khai bao object---------
var person = {
  name: 'kim tran',
  age: 18,
  gender: 'male'
}
//bai4 khai bao arra---------
var listAnimal = [
  { name: 'dog1', age: 3 },
  { name: 'cat', age: 3 },
  { name: 'fish', age: 1 }
]

//bai5--------
var a = 10, h = 20;
var S = a * h / 2;
//bai5.2--------
var width = 10, height = 20;
var s = width * height;
var p = (width + height) * 2
//bai 5.3------
var r = 4;
var s = r * r * Math.PI

//bai6.1---------
var a = 10;

var x = --a + a++;
//1 a co gia tri = 10 => --a = 9;
//2 a nhận giá trị = 9 => a++ = 10 lúc này a nhận giá trả về trước khi thực hiện toán tử' ++' là 9 => x= 9+ 9=18

console.log(x);

//bai6.2---------
var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;

//1 a nhận giá tri 10 , b nhận giá tri 18 
//=> x =  10 + 18 - ++b - ++a
//2 b luc nay có gia tri 19 vì toán tử b++ =19 tiep theo b nhan gia tri ++b =1+19= 20,  
// a luc nay có gia tri 9 vì toán tử a-- = 10-1 =9  tiep theo b nhan gia tri ++a =1+9= 10
//=) x = 10+ 18-20-20=  -2
console.log(x);
// (++a : là tiền tố => toán tử  se tra ve  a + 1; a++ la hậu tố => toán tử trả về a khi chưa thực hiện = a)

//---------------------------------------------------------------
//bai7
var a = 10;
a += 2;

console.log(a)
//7.2
var a = 10;
a *= 2
console.log(a)
//bai8 Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

/**
 * Tính thể tích khối hộp
 * w là chiều rông khối hộp, kiểu dữ liệu là number
 * l là chiều dài khối hộp, kiểu dữ liệu là number
 * h là chiều cao khối hộp, kiểu dữ liệu là number
 */
var w, l, h;
function getBoxVolume(w, h, l) {
  var t = w * h * l;
  return console.log(t);

}
getBoxVolume();
//  Bài 10 :// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau
var a = {
  foo: 'bar'
};

var b = {
  foo: 'bar'
};

console.log(a === b);
// vi toan tu === so sánh cả "giá trị và kiểu dữ liệu' (a khac b nên trả về false)
// 10.2// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200.

var a = '1000';
var b = '1000';

console.log(a > b);
// vi kieu du lieu cua bien a và b la String nên toan tu so sánh > trả về kq false
// bai 11.1
/**
* Dùng vòng lặp for kiểm tra số nguyên tố.
* @param {number} x Số cần kiểm tra
* @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/

var kt = true;
function isPrimeNumber(x) {
  if (x < 2) {
    kt = false
  } else {
    for (var i = 2; i < x - 1; i += 2) {
      if (x % i == 0) {
        kt = false;
        break;
      }
    }
  }

  if (kt == true) {
    console.log(x + ' la so nguyen to')
  } else {
    console.log(x + ' k phai')
  }
}
isPrimeNumber(1);

// 11.2
/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

function fromCharCode() {
  for (i = 65; i <= 122; i++) {
    a = String.fromCharCode(i);
    document.write("" + a + ",,")
  }

}
fromCharCode();
// 11.3
/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 [1,100,200,400,234,56]
 */
var a = [1, 100, 200, 400, 234, 56];
function sum1(array) {
  var tong = 0;
  for (i = 0; i < array.length; i++) {
    tong += array[i]
  }
  console.log(tong);
}
sum1(a);
// 11.4 
// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
var a = [1, 2, 3];
var b = [10, 20];

function sumMultiplyArray(a, b) {
  var sumT = 0;
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      sumT += a[i] * b[j];
    }
  }
  return sumT;

}
console.log(sumMultiplyArray(a, b));
// 11.5 
/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
  // viết code ở đây.
  var tich = 1;
  for (i = start; i < end; i++) {
    tich *= i;
  }

  return tich;
}

console.log(calculate(2, 5));
// 11.6
/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
  for (var i = 0; i < array.length; i++) {

    if (array[i] == value) {
      return true;

    }
  }
  return false;
}
console.log(has([1, 2, 5, 7, 8, 9, 3, 0], 1));
// Bài 12 
//  12.1 
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
  // Write code here...
  var tich = 1;
  for (var a of arr) {
    console.log(a)
    tich *= a
  }
  return tich;
}

console.log('tich la:' + multiply([2, 5, 7, 8, 9, 3, 0]));

//  12.2 
/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};
var keys = [];
function getObjectKey(obj, keys = []) {
  // Write code here...

  for (var key in obj) {
    if (typeof obj[key] == 'object') {
      keys.push(key);
      getObjectKey(obj[key], keys);

    }
    else {
      keys.push(key);
    }
  }
  return keys;
}
console.log(getObjectKey(apartment, keys));
// 12.3 
/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */

function has(object, key) {
  for (var keyObj in object) {

    if (keyObj == key) {
      return true;
    }
    return false;
  }

}

console.log(has(apartment, 'bedroom'));
// ---------------------------------
// Bài tập liên quan đến các hàm của mảng
// Bài 13
// 13.1
/*
 Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
  // your code here!
  for (var i = 0; i < n; i++) {
    arr.pop();
  }
}

// 13.2
/** 
* Write a JavaScript function to get the first element of an array. 
* Passing a parameter 'n' will return the first 'n' elements of the array. 
*/

function first(arr, n) {
  // your code here...
  for (var i = 0; i < n; i++) {
    console.log(arr.shift());
  }

}
var arr1 = [1, 2, 3, 5, 2, 2]
first(arr1, 5);
//  14.1 
/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. 
 Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

function sayHello() {
  console.log('I love Coders.Tokyo')
}

function countAndDo(callback) {

  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
  callback();

}

countAndDo(sayHello);
// 14.2 
/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

function double(num) {
  return num * 2
}


function sumAndDo(nums, callback) {
  // viết code ở đây.
  var tong = 0;

  if (nums == null) {
    tong = 0;
  } else {
    for (var i = 0; i < nums.length; i++) {
      tong += nums[i]
    }

  }
  return callback(tong);
}

console.log(sumAndDo([1, 2, 3], double));
// ----------------------------------------

// Bài tập liên quan đến array.map()

// Bài 15 

//  15.1 
/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function tripple(num) {
  return num * 3
}

function multiply(numbers) {
  // Write code here...
  var news = numbers.map(tripple);
  return news;
}

a = [1, 2, 3];
console.log(multiply(a));
//  15.2 
// Use array map make an array of strings of the names

var users = [
  {
    name: "Angelina Jolie",
    age: 80

  },
  {
    name: "Eric Jones",
    age: 2

  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16

  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

function namesOnly(arr) {
  // Write code here...
  return arr.map(function (element) {
    return element.name;
  });
}
console.log(namesOnly(users));
// Bài tập liên quan đến array.filter()

//  Bài 16

// Bài 16.1
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  // your code here
  var newArr = arr.filter(function (element) {
    return element >= 5
  });
  return newArr;
}
console.log(fiveAndGreaterOnly([3, 4, 5, 6, 7, 98, 34]));
// Bafi 16.2 
// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  // your code here!
  var newArr = arr.filter(function (element) {
    return element % 2 == 0;
  });
  return newArr;
}
console.log(evensOnly([3, 4, 5, 6, 7, 98, 34]));
// Bài 16.3
/**
 * Give a list of students, filter out non-female 
 */
 
var members = [
  { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
// your code here!
var newArr = members.filter(function(element){
  return element.gender !== 'female';
})
return console.log(newArr);
}
filterOutFemales(members);
// -----------------------------------
//  Bài 17

// 17.1 
// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  var newArr= array.find(function(element){
    return element % 2 == 0;
  })
  return newArr;
}
console.log(findFirstEvenNumber([21,23,34,54,54]))

// 17.2
/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
  var number=array.find( function(x){
    return x %2 == 0 ;
  })
  return number;
}
console.log(findDivisibleNum([1, 3, 4], 2))
//
//  Bài tập liên quan đến array.reduce()

// Bài 18

// 18.1
// Turn an array of voter objects into a count of how many people voted

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
var a=0;
function totalVotes(arr) {
 var sum = arr.reduce(function(total,vote){
   return total + vote.voted
 },a)
 return sum;
}
console.log(totalVotes(voters));
// 18.2
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishlist) {
  var  sumtotal=wishlist.reduce((total,item)=>{
    
    return total +=item.price
  },0)
  return sumtotal;
  
}
console.log(shoppingSpree(wishlist));
// 18.3
// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];
function arrayTitle(wishlist) {

  
  return wishlist.map(item=> item.title)
}
console.log(arrayTitle(wishlist));
// 18.4
// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  var newArr=[];
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  },newArr);
  
}
var arrays = [
      ["1", "2", "3"],
      [true],
      [4, 5, 6]
   ];
   console.log(flatten(arrays))
// ------------------------------

// Bài tập liên quan đến array.sort()

//  Bài 19

//  19.1
// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
  // Write code here...
  return arr.sort();
}
//  19.2
// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]

function byAge(arr){
  return arr.sort((a,b) => {
    return a.age-b.age
} )
}
console.log(byAge(arr))
// ---------------------------------
// Bài tập vê if else

//  Bài 20 
/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
  if(score <5 ){
    console.log('C');

  }else if(5< score <7 ){    
  
  console.log('B');
}else if(7< score <10 )
console.log('A');
}
grade(5)
// -----------------------------------
// Bài tập về Date

// Bài 21

// 21.1
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  // Write code here...
  var day = new Date (dateString);
 console.log(day)
 if(day.getDay()==0 || day.getDay()==6)
    return true;
   else return false;
}
console.log(isWeekend(1)) ;

// 21.2
/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  // Write code here...
  return (toDate.getTime()-fromDate.getTime());
}

//  21.3
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {

 let milisecond = + date - ( n * 24 * 60 * 60 * 1000); 
 return new Date(milisecond) 
}
// ------------------------
console.log(subtractDays(date,2))