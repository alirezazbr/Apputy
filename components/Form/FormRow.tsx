import { Grid } from "@mui/material";
interface IProps {
  children: React.ReactNode;
}
const FormRow = (props: IProps) => {
  const { children } = props;
  return (
    <Grid className="flex flex-row  items-center mt-4">
      <Grid className="flex justify-between items-center w-[100%]">
        {children}
      </Grid>
    </Grid>
  );
};
export default FormRow;
