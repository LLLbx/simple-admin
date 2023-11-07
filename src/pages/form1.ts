import { TableColumnProps } from "ant-design-vue";
import { reactive } from "vue";
import { SearchProps } from "../components/c1";

export const form1 = () => {
  let arr = reactive<SearchProps>([
    {
      id: "input1",
      tagType: "Input",
      label: '名字',
      defaultText: "Button1",
      tagProps: {},
    },
    {
      id: "select1",
      tagType: "Select",
      label: '性别',
      defaultText: "please select",
      tagProps: {
        value: "please select",
      },
      childrenData: [
        {
          value: "value1",
          label: "label1",
        },
        {
          value: "value2",
          label: "label2",
        },
        {
          value: "value2",
          label: "label2",
        },
      ],
    },
    {
      id: "input1",
      tagType: "Input",
      label: '公司名',
      defaultText: "Button1",
      tagProps: {},
    },
    {
      id: "select1",
      tagType: "Select",
      label: '地区',
      defaultText: "please select",
      tagProps: {
        value: "please select",
      },
      childrenData: [
        {
          value: "value1",
          label: "label1",
        },
        {
          value: "value2",
          label: "label2",
        },
        {
          value: "value2",
          label: "label2",
        },
      ],
    },
  ]);

  let serch = (value: any) => {
    console.log(value);
  };

  let searchForm = {
    input1: null,
    select1: null,
  };

  let columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return {arr , serch, searchForm, columns}
};
