"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/app/constants";
import axios from "axios";
import { useState } from "react";
const Register = () => {
    const [error, setError] = useState("")
    const formSchema = z.object({
        email: z.string().min(2).max(50),
        password: z.string().min(8)
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const onSubmit = async (val) => {
        try {
            console.log(BASE_URL);
            
            const user = await axios.post(`${BASE_URL}/auth/login`, val
                // method: "POST",
                // body : JSON.stringify(val),
            )
            console.log(user);
            
        } catch (error) {
            setError(error.response.data.error)
            
        }
    };

    return (
        <div className=" flex justify-between gap-[2px] " >
            <div className="flex flex-col gap-6 p-26 pt-50" >
                <div>
                    <Button><ChevronRight></ChevronRight></Button>
                </div>
                <h3>Create your account</h3>
                <p>Sign up to explore your favorite dishes.</p>
                < Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter yor email..." {...field}></Input>

                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="password" placeholder="Password" {...field} />

                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {error&& <p className="text-red-600">{error}</p> }
                        <Button type="submit" className="w-100">Let's Go</Button>
                        
                    </form>
                </Form >
                <div className="flex">
                    <p>Already have an account?</p><span><Button variant="link">Log In</Button></span>
                </div>
            </div>
            <div className="">
                <img src="frame.png"></img>
            </div>

        </div>

    )
}
export default Register





