import React from "react";
import blogData from "../data/blog";
import Header  from "./Header";
import About from "./About"
import Articlelist from "./Articlelist";

;
console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name = {blogData.name}/>;
      <About image = {blogData.image } alt = "blog logo" about = {blogData.about}/>
      <Articlelist posts ={blogData.posts} />
     
    </div>
  );
}

export default App;
