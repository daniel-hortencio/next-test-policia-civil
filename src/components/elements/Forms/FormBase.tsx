import { ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface Props {
  methods: UseFormReturn<any, any, undefined>;
  onSubmit: (data: any) => Promise<any>;
  children: ReactNode;
}

export const FormBase = ({ methods, onSubmit, children }: Props) => (
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
  </FormProvider>
);
