import * as React from "react";
import {
  Edit,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Filter,
} from "react-admin";
import { Post } from "../../interfaces/admin/post";

const PostFilter = (props?: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

type PostListProps = {
  posts: Post[];
};

export const PostList: React.FC<PostListProps> = (props) => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      {/* ReferenceFieldでリレーション張れる */}
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = (props: any) => {
  return <span>Post {props.record ? `"${props.record.title}"` : ""}</span>;
};

export const PostEdit = (post: Post) => (
  <Edit {...post} title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (post: Post) => (
  <Create {...post}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
