## What are some differences between interfaces and types in TypeScript?

interface শুধু non primitive data type (object, array, function) এর ক্ষেত্রে ব্যাবহার করা হয়। 

extend করার জন্য "extend" শব্দটি ব্যাবহার করা হয়। 

interface IUser {
  name: string;
  age: number;
}
interface IUserWithRole extends IUser{
    role: "admin" | "user";
}


এখানে extends IUser ব্যাবহার করার কারণে IUser এর property name, age IUserWithRole এ চলে এসেছে। 

interface declare করার সময় "=" চিহ্ন দেওয়া যাবে না। 
যেমনঃ 

interface IUser {
  name: string;
  age: number;
}

এখানে IUser এরপর "=" চিহ্ন দেওয়া হয় নি 

type primitive, Object data type উভয়ের ক্ষেত্রেই ব্যাবহার করা হয়। 

type declare করার সময় "=" চিহ্ন দিতে হয়। 
যেমনঃ 

type User = {
  name: string;
  age: number;
};
type IsAdmin = true;
const isAdmin: IsAdmin = true;

এখানে User, IsAdmin এরপর "=" চিহ্ন দেওয়া হয়েছে। 

extend করার জন্য "&" চিহ্নটি ব্যাবহার করা হয়। 

type User = {
  name: string;
  age: number; 
}
type UserWithRole = User & {
    role: "admin" | "user";
}

## Provide an example of using union and intersection types in TypeScript.

যখন একাধিক ধরনের input Data এর থেকে যেকোনোটি হতে পারে এমন অবস্থা বোঝায় তখন union type ব্যাবহার করা হয়। code লিখার সময় union type এর জন্য "।" এই চিহ্নটি ব্যাবহার করা হয়।  

যেমন ঃ

type role ="user" | "admin" | "doctor";


এখানে user অথবা admin অথবা doctor  যেকোনোটির জন্য role true হবে।


একাধিক type একসাথে এবং বাধ্যতামূলক থাকতে হবে , এমন অবস্থা বুঝালে intersection type ব্যাবহার করা হয়। code লিখার সময় "&" এই চিহ্ন দিয়ে intersection type বুঝানো হয় । 

যেমন ঃ 

type Person ={
    name: string;
    age : number;
};
type Employee = {
    salary: number
};

type Staff = Person & Employee;

const staff1: Staff={
    name :"A",
    age: 24,
    salary: 30000,
};

