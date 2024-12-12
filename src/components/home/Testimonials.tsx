"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    id: 1,
    content: "从零基础开始学习英语，现在已经成功通过了雅思7分，感谢莘煜文化的老师们！",
    author: "张同学",
    role: "雅思学员",
    rating: 5,
    image: "/images/zhang.png",
    achievement: "雅思7分",
  },
  {
    id: 2,
    content: "在这里学习法语一年，顺利通过了DELF B2考试，老师们都很专业很耐心。",
    author: "李同学",
    role: "法语学员",
    rating: 5,
    image: "/images/li.png",
    achievement: "DELF B2",
  },
  {
    id: 3,
    content: "IT课程的实战项目让我收获很大，现在已经成功入职一家知名互联网公司。",
    author: "王同学",
    role: "IT课程学员",
    rating: 5,
    image: "/images/wang.png",
    achievement: "成功就业",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            学员心声
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600"
          >
            听听我们的学员怎么说
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: testimonial.id * 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              suppressHydrationWarning
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                  />
                  <div>
                    <div className="flex items-center gap-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900">
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4 border-t border-gray-900/10 pt-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">{testimonial.role}</p>
                  <p className="text-gray-600">成就：{testimonial.achievement}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 