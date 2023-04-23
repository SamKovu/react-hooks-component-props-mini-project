import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header name={blogData.name}/>
     <About image={blogData.image} about={blogData.about} />
     <ArticleList post={blogData.posts}/>
    </div>
  );
}

function Header(props){
  return (
    <header>
      <h1>{props.name} </h1>
    </header>
  )
}

function About({image="https://via.placeholder.com/215",about}){
  return(
    <aside>
      <img src={image} alt="blog logo"/>
      <p>{about}</p>
    </aside>
  )
}

function ArticleList(props){
  
  const articleList=props.post.map((post)=>{
  return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>;})
  return(
    <main>
      {articleList}
    </main>
  )
}

function Article({title,date="January 1, 1970",preview}){
  return(
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default App;
