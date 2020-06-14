import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../components/admin/User";
import { PostList, PostCreate, PostEdit } from "../components/admin/Post";

const httpClient = (url: string, options: any = {}) => {
  options.header = {
    "Access-Control-Expose-Headers": "Content-Range",
  };
  return fetchUtils.fetchJson(url, options);
};
// ここでAPI側のエンドポイントのルートを指定すれば良いみたい
const dataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com",
  httpClient
);

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
    </Admin>
  );
};

export default ReactAdmin;
