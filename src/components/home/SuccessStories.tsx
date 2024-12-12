"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const successStories = [
  {
    id: 1,
    title: "从语言小白到同声传译",
    description: "通过系统的英语培训，成功考取同声传译证书，现在在某跨国公司担任高级翻译。",
    image: "/images/fanyi.png",
    stats: [
      { label: "学习时长", value: "2年" },
      { label: "考试成绩", value: "专八优秀" },
      { label: "就业情况", value: "跨国公司" },
    ],
  },
  {
    id: 2,
    title: "IT零基础到全栈工程师",
    description: "参加IT全栈培训课程，从零开始学习编程，现已成为资深全栈开发工程师。",
    image: "/images/it.png",
    stats: [
      { label: "学习时长", value: "1年" },
      { label: "项目经验", value: "6个" },
      { label: "薪资提升", value: "300%" },
    ],
  },
  {
    id: 3,
    title: "成功留学德国名校",
    description: "通过德语课程学习，成功申请到德国顶尖大学，实现留学梦想。",
    image: "/images/liuxue.png",
    stats: [
      { label: "德语等级", value: "C1" },
      { label: "录取学校", value: "慕尼黑工大" },
      { label: "奖学金", value: "全额" },
    ],
  },
];

export default function SuccessStories() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            成功案例
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600"
          >
            每一个成功都是我们共同的骄傲
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {successStories.map((story) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: story.id * 0.1 }}
              className="flex flex-col items-start"
              suppressHydrationWarning
            >
              <div className="relative w-full">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {story.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {story.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {story.stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className="flex flex-col-reverse gap-y-1 border-l border-gray-900/10 pl-4"
                  >
                    <dt className="text-sm leading-6 text-gray-600">{stat.label}</dt>
                    <dd className="font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 