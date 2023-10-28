import { reactive } from "vue";
import { SearchProps } from "../components/c1";

export const form1 = () => {
  let arr = reactive<SearchProps>([
    {
      id: "input1",
      tagType: "Input",
      defaultText: "Button1",
      tagProps: {},
    },
    {
      id: "select1",
      tagType: "Select",
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

  return {arr , serch, searchForm}
};
