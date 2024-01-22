import { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface Props {
  children: ReactNode;
  onSubmit: (data: any) => void;
}

export const Form = ({ children, onSubmit }: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
