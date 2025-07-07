"use client";
// ****** Styles ****** //
import styles from "./auth.module.scss";
// ****** Custom Components ****** //
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
// ****** HTTP methods ****** //
import { useQuery } from "@tanstack/react-query";
import { getRandomUser } from "@/services/auth.services";
// ****** Zod Validations & Third-Party  ****** //
import z from "zod";
import { schema } from "./validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
// ****** Utils & libs ****** //
import AuthTokenManager from "@/lib/TokenManager";
// ****** Next Hooks ****** //
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof schema>;

const AuthPage = () => {
  const router = useRouter();
  const tokenManager = new AuthTokenManager("/auth");

  const { isLoading, refetch } = useQuery({
    queryKey: ["randomUser"],
    queryFn: getRandomUser,
    enabled: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await refetch();

      if (result.isSuccess && result.data) {
        tokenManager.setUserData(result.data);
        router.push("/dashboard");
      } else {
        console.error("Refetch failed:", result.error);
      }
    } catch (err) {
      console.error("Error in refetch:", err);
    }
  };

  return (
    <div className={`${styles.wrapper} p-3`}>
      <div className={`${styles.form} col-md-3 col-sm-8 col-11 card p-3 rounded`}>
        <div className={`${styles.header}`}>
          <p>Wellcome!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Phone Number"
            name="phone_number"
            type="text"
            isRequired={true}
            error={errors.phone_number}
            register={register}
          />

          <Button
            variant="success"
            fullWidth
            type="submit"
            
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
