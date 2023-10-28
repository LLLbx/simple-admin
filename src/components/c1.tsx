import { defineComponent, reactive, } from "vue";
import { Button, ButtonProps, SelectProps, InputProps, Select, SelectOption, Input } from "ant-design-vue";

type CommonItem = {
  id: string
}

type InputItem = {
  tagType: "Input",
  tagProps: InputProps,
  defaultText?: String;
}

type SelectItem = {
  tagType: "Select",
  tagProps: SelectProps,
  defaultText?: String;
  childrenData: SelectProps['options']
}
type PropsItem = InputItem | SelectItem

export type SearchProps = Array<PropsItem & CommonItem>;

type Props = {
  tagData: SearchProps;
  searchForm: Record<string, any>
};

export default defineComponent<Props>(
  ({ tagData, searchForm }, {emit}) => {
    const $searchForm = reactive<Record<string, any>>(searchForm);
    

    let search = () => {
      emit('search', $searchForm)
    }

    const dataChange = (e: any, i: string) => {
      $searchForm[i] = e
    }
    
    return () => (
      <div>
        {tagData.map(i => {
          if(i.tagType === 'Select') {
            return <Select id={i.id} {...i.tagProps} value={$searchForm[i.id] || i.tagProps.value} onChange={e => dataChange(e, i.id)}>
              {i.childrenData?.map(i => {
                return <SelectOption value={i.value}>{i.label}</SelectOption>
              })}
            </Select>
          }
          else if(i.tagType === 'Input') {
            return <Input id={i.id} {...i.tagProps} value={$searchForm[i.id] || i.tagProps.value} onInput={e => dataChange(e.target.value, i.id)}></Input>
          }
        })}
        <div>
          <Button type="link" onClick={search}>search</Button>
        </div>
      </div>
    );
  },
  {
    props: ["tagData", "searchForm"],
    emits: ["search"]
  }
);
