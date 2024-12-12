"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ConsultButton from "@/components/common/ConsultButton";
import Testimonials from "@/components/home/Testimonials";
import SuccessStories from "@/components/home/SuccessStories";
import Image from "next/image";

export default function Home() {
  const courses = [
    { name: "英语课程", icon: "🇬🇧", description: "专业外教授课，小班教学" },
    { name: "法语课程", icon: "🇫🇷", description: "零基础直达高级水平" },
    { name: "日语课程", icon: "🇯🇵", description: "N1备考专业指导" },
    { name: "德语课程", icon: "🇩🇪", description: "商务德语特训班" },
    { name: "IT技术", icon: "💻", description: "全栈开发实战课程" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="relative">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Professional discussion and consultation"
            fill
            className="object-cover object-[center_30%] brightness-[0.9] contrast-[1.1]"
            priority
          />
          {/* 渐变叠加层 - 进一步降低不透明度 */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/75 via-white/70 to-white/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              西安莘煜文化 - 您的专业语言培训伙伴
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              提供优质的语言培训和IT技术教育，助您实现梦想
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <ConsultButton />
              <Link
                href="/courses"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                了解更多 <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              精品课程
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              为您提供全方位的语言学习和IT技术培训解决方案
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {courses.map((course) => (
              <motion.div
                key={course.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                  <div className="mt-4">
                    <ConsultButton />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              为什么选择我们
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  专业师资力量
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    汇集国内外优秀教师，确保教学质量
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  灵活的学习方式
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    提供线上线下多种学习模式，适应不同学习需求
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  优质学习环境
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    干净明亮的教学环境，先进的教学设备
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* 添加成功案例 */}
      <SuccessStories />
      
      {/* 添加学员评价 */}
      <Testimonials />
      
      {/* 咨询提示部分 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            课程咨询
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            如果您对我们的课程感兴趣，欢迎添加客服微信咨询详细信息
          </p>
          <p className="mt-2 text-base text-gray-500">
            我们的课程顾问将为您提供一对一的专业建议，帮助您选择最适合的学习方案
          </p>
          <div className="mt-10">
            <ConsultButton />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
