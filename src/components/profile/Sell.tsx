"use client";

import { useCategories } from "@/services/queries";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  price: z.string().min(1, { message: "Price is required." }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  categoryId: z.string().min(1, { message: "Category is required." }),
  images: z.any().refine((val) => val?.length > 0, {
    message: "At least one image is required.",
  }),
});

export default function Sell() {
  const { data: categories = [] } = useCategories();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      categoryId: "",
      images: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("categoryId", values.categoryId);

    (values.images as File[]).forEach((file) =>
      formData.append("images", file)
    );

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:8080/api/clothes/save", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Clothe added successfully!");
      form.reset();
    } catch (err) {
      toast.error("Failed to add clothe");
    }
  };

  return (
    <div className="py-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sell Items</h2>
      <p className="text-gray-600 mb-6">
        Here you can list items for sale, manage your listings, and track sales.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Denim Jacket" {...field} />
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
                <FormLabel>Price (in NPR)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="4500" {...field} />
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
                    placeholder="Stylish blue denim jacket"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <select {...field} className="w-full border rounded p-2">
                    <option value="">Select Category</option>
                    {categories.map((cat: any) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
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
                <FormLabel>Upload Images</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    onChange={(e) =>
                      field.onChange(
                        e.target.files ? Array.from(e.target.files) : []
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
