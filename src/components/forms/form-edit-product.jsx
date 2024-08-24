import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { axiosPrivate } from "@/lib/axios";
import { productSchema } from "@/lib/validations/product";
import { useParams } from "react-router-dom";

export function EditProductForm({ data }) {
  const { slug } = useParams()

  const form = useForm({
    defaultValues: {
      name: data?.name,
      description: data?.description,
      stock: data?.stock,
      price: data?.price,
    },
  });

  const onSubmit = async (values) => {
    try {
      await axiosPrivate.patch(`/api/v1/stores/${slug}/products/${data.uuid}`, values);
      toast.success("Product updated.");
      window.history.back();
    } catch (error) {
      toast.error("Something wrong. Please try again...");
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid w-full max-w-xl gap-5 ps-1"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Type product name here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type product description here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <div className="relative">
                  <p className="absolute text-sm left-0.5 w-8 inset-y-0 grid place-items-center">
                    Rp
                  </p>
                  <Input
                    type="number"
                    className="pl-8"
                    placeholder="0"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type product stock here."
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          Edit product
          <span className="sr-only">Submit</span>
        </Button>
      </form>
    </Form>
  );
}
