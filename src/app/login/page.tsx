"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth";
import Link from "next/link";

export const loginFormSchema = z.object({
  email: z.string().min(1, "Please enter a email"),
  password: z.string().min(1, "Please enter a password"),
});

export default function LoginPage() {
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      const data = await signIn(values.email, values.password);
      if (data.user) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("error in loginPage: ", error);
    }
  }

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-wider mb-2">
            BUI CAPITAL
          </h1>
          <p className="text-blue-100 text-lg">
            Sign In To Your Investment Account
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-700">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 border-2 border-gray-200 focus:border-blue-600 focus:ring-0 rounded-lg bg-gray-50 focus:bg-white transition-all duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-gray-500">
                      Enter your registered email address
                    </FormDescription>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-700">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="h-12 border-2 border-gray-200 focus:border-blue-600 focus:ring-0 rounded-lg bg-gray-50 focus:bg-white transition-all duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-gray-500">
                      Enter your account password
                    </FormDescription>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 bg-slate-800 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mt-5"
              >
                Sign In
              </Button>
            </form>
          </Form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-slate-700 font-semibold hover:text-slate-600 hover:underline transition-colors duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-blue-100 text-xs">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
