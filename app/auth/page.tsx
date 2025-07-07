"use client";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { getRandomUser } from "@/services/auth.services";
import { useQuery } from "@tanstack/react-query";
import { schema } from "./validations/schema";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthTokenManager from "@/lib/TokenManager";

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
    <div className="p-3">
      <div className="col-md-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Phone Number"
            name="phone_number"
            type="text"
            isRequired={true}
            error={errors.phone_number}
            register={register}
          />

          <Button variant="primary" type="submit" isLoading={isLoading}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
