import { Button } from '@mui/material';
import { FullWidth } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { useFormikContext } from 'formik'

interface OmSubmitButtonProps {
    children: any,
    otherProps: any
}

const OmSubmitButton = ({children, otherProps}: OmSubmitButtonProps) => {
  const {submitForm} = useFormikContext();
  const handleSubmit = () =>{
    submitForm()
  }
  const configButton = {
    ...otherProps,
    color: 'primary',
    variant: 'contained',
    fullWidth: true,
    onclick: handleSubmit
  }

  return (
    <Button {...configButton}>{children}</Button>
  )
}

export default OmSubmitButton