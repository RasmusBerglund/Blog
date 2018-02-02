import React from 'react';

const Post = (props) => {
  return (
    <div className="BlogListContainer">
        <div>
          {props.title}
        </div>
    </div>
  );
};

export const BlogList = (props) => {
  return (
    <div>
      {props.posts.map(post => <Post key={post._id} {...post} />)}
    </div>
  );
};