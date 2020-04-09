import getAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => getAPI("posts?_sort=id&_order=asc");
const postNewsBlog = (payload) => PostAPI("posts", payload);
const deleteNewBlog = (payload) => DeleteAPI("posts", payload);

const API = {
  getNewsBlog,
  postNewsBlog,
  deleteNewBlog,
};

export default API;
