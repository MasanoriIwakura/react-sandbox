import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../components/admin/User";
import { PostList, PostCreate, PostEdit } from "../components/admin/Post";
import Dashboard from "../components/admin/Dashboard";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

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
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  );
};

export default ReactAdmin;
