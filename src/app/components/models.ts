export interface Users{
  id: number ;
name: string ;
username: string;
}
export interface Posts{

  id: number;
userId: number;
title: string;
body: string;

}
export interface Comments{
  postId: number;
  id: number;
  name: string;
  email: any;
  body: string;

}
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
