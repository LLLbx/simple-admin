import { defineComponent, reactive } from "vue";
import "./c1.scss";
import {
  Button,
  ButtonProps,
  SelectProps,
  InputProps,
  Select,
  SelectOption,
  Input,
  Table,
  TableColumnProps,
  TableProps,
} from "ant-design-vue";

type CommonItem = {
  id: string;
  label: string;
};

type InputItem = {
  tagType: "Input";
  tagProps: InputProps;
  defaultText?: String;
};

type SelectItem = {
  tagType: "Select";
  tagProps: SelectProps;
  defaultText?: String;
  childrenData: SelectProps["options"];
};
type PropsItem = InputItem | SelectItem;

export type SearchProps = Array<PropsItem & CommonItem>;

type Props = {
  tagData: SearchProps;
  searchForm: Record<string, any>;
  columnForm: TableProps["columns"];
};

export default defineComponent<Props>(
  ({ tagData, searchForm, columnForm }, { emit }) => {
    const $searchForm = reactive<Record<string, any>>(searchForm);
    console.log(columnForm);

    let search = () => {
      emit("search", $searchForm);
    };

    const dataChange = (e: any, i: string) => {
      $searchForm[i] = e;
    };

    return () => (
      <div class="c1_box">
        <div class="c1_header">
          {tagData.map((i) => {
            let item = null;
            if (i.tagType === "Select") {
              item = (
                <Select
                  id={i.id}
                  {...i.tagProps}
                  value={$searchForm[i.id] || i.tagProps.value}
                  onChange={(e) => dataChange(e, i.id)}
                >
                  {i.childrenData?.map((i) => {
                    return (
                      <SelectOption value={i.value}> {i.label}</SelectOption>
                    );
                  })}
                </Select>
              );
            } else if (i.tagType === "Input") {
              item = (
                <Input
                  id={i.id}
                  {...i.tagProps}
                  value={$searchForm[i.id] || i.tagProps.value}
                  onInput={(e) => dataChange(e.target.value, i.id)}
                ></Input>
              );
            }
            return (
              <div class="c1_header_item">
                {" "}
                <span class="c1_label">{i.label}</span> {item}
              </div>
            );
          })}
        </div>

        <div class="c1_bottom">
          <Button type="link" onClick={search}>
            search
          </Button>
        </div>

        <div>
          <Table columns={columnForm}></Table>
        </div>
      </div>
    );
  },
  {
    props: ["tagData", "searchForm", "columnForm"],
    emits: ["search"],
  }
);
