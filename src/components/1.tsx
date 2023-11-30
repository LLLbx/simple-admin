import { defineComponent, reactive } from "vue";
type Props = {};
export default defineComponent<Props>(
  () => {
    return () => <div></div>;
  },
  {
    props: [],
    emits: [],
  }
);
