import { Grid } from "@mui/material";
interface IProps {
  children: React.ReactNode;
}
const FormCell = (props: IProps) => {
  const { children } = props;
  return <Grid className="flex items-center w-fit">{children}</Grid>;
};
export default FormCell;
