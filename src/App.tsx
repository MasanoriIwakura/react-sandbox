import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/User";
import { PostList, PostCreate, PostEdit } from "./components/Post";

// ここでAPI側のエンドポイントのルートを指定すれば良いみたい
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default App;
