import { Grid } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}
const FormContainer = (props: IProps) => {
  const { children } = props;
  return (
    <Grid className="flex flex-col rounded-xl w-fit mx-auto p-12 bg-white3 shadow-md">
      {children}
    </Grid>
  );
};
export default FormContainer;
