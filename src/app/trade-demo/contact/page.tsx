"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/trade-demo/ui/form";
import { Input } from "@/components/trade-demo/ui/input";
import { Textarea } from "@/components/trade-demo/ui/textarea";
import { Button } from "@/components/trade-demo/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/trade-demo/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/trade-demo/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Contact form schema
const serviceTypes = [
  "General Renovation",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Maintenance",
  "Other",
];

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setSubmitSuccess(true);
      form.reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <div className="bg-[#1a1c1e] py-20 text-center relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-['Nunito_Sans'] font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below for a free estimate, or give us a
            call.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 lg:col-span-1"
          >
            <Card className="shadow-lg border-t-4 border-[#d4915a]">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1a1c1e]/5 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-[#1a1c1e]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1e]">Phone</h4>
                      <p className="text-gray-500">(555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri 8am-6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1a1c1e]/5 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-[#1a1c1e]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1e]">Email</h4>
                      <p className="text-gray-500">info@probuild.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1a1c1e]/5 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#1a1c1e]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1e]">Office</h4>
                      <p className="text-gray-500">
                        123 Builder Lane, Suite 100
                        <br />
                        Construction City, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="!bg-[#1a1c1e] text-white shadow-lg border-none">
              <CardContent className="p-6 bg-[#1a1c1e] rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-6 h-6 text-[#d4915a]" />
                  <h4 className="font-bold text-lg text-white">Emergency Service</h4>
                </div>
                <p className="text-white/80 mb-4">
                  Available 24/7 for urgent plumbing and electrical issues.
                </p>
                <div className="text-2xl font-['Nunito_Sans'] font-bold text-[#d4915a]">
                  (555) 999-8888
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardHeader className="bg-[#173050]/20 border-b border-gray-200/50 p-8">
                <CardTitle className="text-2xl text-[#1a1c1e] font-['Nunito_Sans'] font-bold">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a1c1e]">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="h-12 bg-[#173050]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a1c1e]">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="(555) 123-4567"
                                className="h-12 bg-[#173050]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a1c1e]">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                className="h-12 bg-[#173050]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a1c1e]">Service Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-[#173050]/20">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-[#1a1c1e]">
                            Project Details
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-[150px] bg-[#173050]/20 resize-none p-4"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full !bg-[#d4915a] !text-[#1a1c1e] hover:!bg-[#d4915a]/80 font-bold uppercase py-6 text-lg tracking-wide"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
