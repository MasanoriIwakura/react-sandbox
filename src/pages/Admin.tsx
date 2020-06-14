import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../components/admin/User";
import { PostList, PostCreate, PostEdit } from "../components/admin/Post";
import { Link } from "react-router-dom";

// ここでAPI側のエンドポイントのルートを指定すれば良いみたい
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const ReactAdmin = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource name="users" list={UserList} />

      <Link to="/">Home</Link>
    </Admin>
  );
};

export default ReactAdmin;
