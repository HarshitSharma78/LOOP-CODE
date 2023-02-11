

//.....................For Loop Exercise..........................

//Q.1 Print 1 to 100

// let i = 1 
// while( i <= 100){
//             console.log(i)
//             i++
//         }

//_________________________________________________________________________//

//Q.2 Print all Odd numbers from 1 to 100

// let a = 1
// while( a <= 100){
    
//         if(a % 2 === 1)
//             console.log(a)
//             a++        
//         }

//__________________________________________________________________________//

//Q.3 Print all Even numbers from 1 to 100

// let a = 0
// while( a <= 100){
    
//         if(a % 2 === 0)
        
//             console.log(a)
//             a++    
//         }

//_________________________________________________________________________//

//Q.4 Print all numbers which are multiple of 5 in 1 to 100

// let a = 1
// while( a <= 100){
    
//         if(a % 5 === 0)
        
//             console.log(a)
//             a++    
//         }

//__________________________________________________________________________//

//Q.5 Print all numbers which are multiple of 5 and 15 in 1 to 100

// let a = 1
// while( a <= 100){
    
//         if(a % 5 === 0 && a % 15 === 0)
        
//             console.log(a)
//             a++    
//         }

//__________________________________________________________________________//

//Q.6 Print 2's table

// let a = 2
// while( a <= 20){    
//     console.log(a)
//     a = a + 2  
// }

//__________________________________________________________________________//

//Q.7 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// let a = Number(prompt("how many times do you want to print hello world ? "))

// let b = 1
// while( b <= a){
            
//             console.log("hellow word", a);
//             b++           ;
//         }

// _________________________________________________________________________//

//Q.8 Calculate sum of all numbers from 1 to 100

// let a = 0
// let b = 1 
// while(b <= 100 ){
//     a = a + b
//     if(b % 2 === 0)
//         console.log("The sum of all numbers:" , a)
//         b++
//     }

//___________________________________________________________________________//

//Q.9 Calculate sum of all odd numbers from 1 to 100

// let b = 0
// let count = 0
// while(b <= 100 ){
//     if(b%2==1){
//    count +=  b
//     }
//     b++
//     }
//     console.log(count);

//____________________________________________________________________________//

//Q.10 Calculate sum of all even numbers from 1 to 100

// let b = 0
// let count = 0
// while(b <= 100 ){
//     if(b%2==0){
//    count +=  b
//     }
//     b++
//     }
//     console.log(count);

//___________________________________________________________________________//

//Q.11 print 1,2,4,8,16,32,64.......upto 2048
    
// for ( let a = 1 ; a <= 2048 ; a = a * 2){
    
//     console.log(a)

// }
    
//___________________________________________________________________________//

/*Q.12 print
1,2,3,4,5,6,7,8,9,10
11,12,13,14,15,16,17,18,19,20
.
.
......................99,100*/

// let a = 0 

// while( a <= 100 ){
        
//     document.write(a + ",")
//         if (a % 10 === 0) {
//     document.write("<br>");
//    }
//     a++
// }

//___________________________________________________________________________//

//Q.13 pritn 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.

// let a = 0 
// while ( a <= 100 ){
//         if( a % 3 === 0 && a % 5===0 ){
//         console.log ( "fizzbuzz")}
// else{
//     console.log(a)
// }
// a++
// }

//____________________________________________________________________________//

/*Q.14 print 10 table like this */

// let x = 10;
// let i = 1;
// while(i<=10){
//     console.log(x+"*"+i+"="+x*i);
//     i++
// }

//____________________________________________________________________________//

/*Q.15 Run a loop from 1 to 50
 From 1 to 10 print "A"
 From 11 to 20 print "B"
 From 21 to 30 print "C"
 From 31 to 40 print "D"
 From 41 to 50 print "E"*/


// for( let b = 1  ; b <= 50 ; b++ ){

//         if( b <= 10 ){
//             console.log(b + "A")
//         }
//         else if( b <= 20){
//             console.log( b+ "B")
//         }
//         else if( b <= 30){
//             console.log( b + "C")
//         }
//         else if ( b <= 40 ){
//             console.log( b + "D")
//         }
//         else if ( b <= 50){
//             console.log( b + "E")
//         }

// }


//____________________________________________________________________________//

/*Q.16 Run a loop from 50 to 1
From 50 to 41 print "A"
From 40 to 31 print "B"
From 30 to 21 print "C"
From 20 to 11 print "D"
From 10 to 1 print "E"*/


// for( let a = 50 ; a >= 1 ; a--){
//     if( a <= 10 ){
//         console.log(a + "E")
//     }
//     else if ( a <= 20){
//         console.log( a + "D")
//     }
//     else if ( a <= 30){
//         console.log( a + "C")
//     }
//     else if ( a <= 40 ){
//         console.log( a + "B")
//     }
//     else if ( a <= 50 ){
//         console.log( a + "A")
//     }
    
    
// }



//_____________________________________________________________________________//

// Q.17 print below series 5,25,125...till number is less than equal to 10000


// for ( let a = 5 ; a <= 10000 ; a = a * 5 ){
    
//     console.log( a)
// }

//____________________________________________________________________________//

// Q.18. print below series 3,6,9,12....till number is less than equal to 500

// for( let a = 3 ; a <= 500 ;a = a + 3 ){
//     console.log(a)
// }

//___________________________________________________________________________//

/* Q.19 print below series
120
221
322
423
524
625
726
827
928
1029 */


// let b = 20
// for ( let a = 1  ; b <= 29 , a  <=  10  ;  a++ , b++){
//     console.log(a , b)
// }

//_____________________________________________________________________________//

//Q.20 print below series 100 95 90 85 80 ... till 0

// for( let a = 100  ;  a >= 0  ; a = a - 5){
//     console.log( a )
// }

//_______________________________________________________________________________//

//Q.21 Number 70 is divisible by which numbers till 70? Find out and print those numbers


// for( let a = 1  ;  a  <= 70  ; a++){
//     if ( 70 % 1 === 0){

//         console.log(a)
//     }
    
// }

//_______________________________________________________________________________//

//.........................wile..................loop.......................//


//Q.1 Write a while loop that logs the numbers 1 to 10 in the console.


// let i = 1
// while( i <= 10 ){
//     console.log(i)
//     i++
// }


//_________________________________________________________________//

//Q.2 Calculate sum of all numbers from 1 to 10


// let a = 1 
// let b = 0 

// while( a <= 10){
//     b = a + b 
//     a++
// }
// console.log(b)


//__________________________________________________________________//

//Q.3 Counting down from 10 to 1


// let a = 10

// while( a >= 0  ){
//     console.log(a)
//     a--
// }


//___________________________________________________________//

//Q.4 Print 2's table


// let a = 2
// while( a <= 20){
//     if( a % 2 === 0){
//         console.log(a)
//     }
//     a++
// }



//_____________________________________________________________//

//Q.5 Calculate sum of all odd numbers from 1 to 100


// let a = 1
// let i = 0 

// while ( a <= 100){
//     if( a % 2 === 1 )
//         i = a + i 
//         a++
    
// }
// console.log(i)



//______________________________________________________________//


//......................do while loop.........................


//Q.1 Write a do...while loop that logs the numbers 1 to 5 in the console

// let a = 1 
// do{
//     console.log(a)
//     a++
// }while( a <= 5)

//_____________________________________________________________________//

//Q.2 Counting down from 10 to 1

// let a = 10 
// do {
//     console.log(a)
//     a--
// }while( a >= 1)

//_____________________________________________________________________//

//Q.3 Calculate sum of all numbers from 1 to 10

// let a = 1 
// let b = 0 

// do{    
//     b = a+b    
//     a++    
// }while( a <= 10);
// console.log(b)

//_______________________________________________________________________//

//Q.4 Print 2's table

// let a = 2 
// do {
//     console.log(a)
//     a = a + 2
// }while( a <= 20 )

//______________________________________________________________________//

//Q.5 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// let user = Number(prompt("please enter a number"))
// let a = 1 
// do{
//     console.log("hello world")
//     a++
// }while(a <= user)

//_________________________________________________________________________//

//Q.6 Calculate sum of all even numbers from 1 to 100

// let a = 1 
// let sum = 0
// do{
//     if( a % 2 === 0){
//         sum = sum + a
//     }
//     a++;
// }while( a <= 100)
// console.log("The sum of all even numbers:" , sum);


//____________________________________________________________________________//