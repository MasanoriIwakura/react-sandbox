import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import { User } from "../interfaces/user";
import MyUrlField from "./MyUrlField";

type Props = {
  users: User[];
};

export const UserList: React.FC<Props> = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
