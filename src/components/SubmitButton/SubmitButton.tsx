import { useAppFormContext } from "@/context";

const SubmitButton = ({ label }: { label: string }) => {
  const form = useAppFormContext();

  return <form.SubmitButton label={label} />;
};

export default SubmitButton;
