import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useFetchCategories } from "@/features/use-fetch-category";
import { axiosPrivate } from "@/lib/axios";
import { productSchema } from "@/lib/validations/product";
import { useParams } from "react-router-dom";
import { FileButton } from "@mantine/core";
import { FileUpload } from "./file-upload";
import { ScrollArea } from "../ui/scroll-area";
import { navigate } from "@/lib/utils";

export function AddProductForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  const { data: categories = [] } = useFetchCategories();

  const form = useForm({
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: "",
      description: "",
      stock: "",
      price: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", values.category);
      formData.append("description", values.description);
      formData.append("price", parseInt(values.price));
      formData.append("stock", parseInt(values.stock));

      Array.from(values.images).forEach((file) => {
        formData.append("images", file.file);
      });

      await axiosPrivate.post(`/api/v1/stores/${slug}/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product is created.");
      navigate(`/dashboard/stores/${slug}`)
      
    } catch (error) {
      toast.error("Something wrong. Please try again...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid w-full max-w-xl gap-5 ps-6 pe-9 py-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type product name here."
                  disabled={isLoading}
                  {...field}
                />
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
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={(value) => field.onChange(value)}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((item, index) => (
                    <SelectItem value={item.name} key={index}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  disabled={isLoading}
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <FileUpload
                  value={field.value}
                  onChange={(file) =>
                    field.value
                      ? field.onChange([...field.value, ...file])
                      : field.onChange([...file])
                  }
                  onRemove={(url) =>
                    field.onChange([
                      ...field.value.filter((current) => current.url !== url),
                    ])
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button isLoading={isLoading}>
          Add Product
          <span className="sr-only">Add product</span>
        </Button>
      </form>
    </Form>
  );
}
