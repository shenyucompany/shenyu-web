"use client";

import { motion } from "framer-motion";
import ConsultButton from "@/components/common/ConsultButton";

const courses = [
  {
    id: 1,
    name: "英语课程",
    icon: "🇬🇧",
    levels: ["初级班", "中级班", "高级班"],
    features: [
      "全外教授课",
      "小班教学（4-6人）",
      "定制化课程设计",
      "免费口语角活动",
    ],
    description: "从零基础到商务英语，全方位提升您的英语水平。",
  },
  {
    id: 2,
    name: "法语课程",
    icon: "🇫🇷",
    levels: ["A1", "A2", "B1", "B2"],
    features: [
      "法籍教师授课",
      "考试辅导（DELF/DALF）",
      "商务法语特训",
      "法语文化课程",
    ],
    description: "专业法语培训，助您轻松掌握这门浪漫的语言。",
  },
  {
    id: 3,
    name: "日语课程",
    icon: "🇯🇵",
    levels: ["N5", "N4", "N3", "N2", "N1"],
    features: [
      "日籍教师授课",
      "JLPT考试辅导",
      "日语商务培训",
      "动漫配音课程",
    ],
    description: "系统的日语学习体系，让您快速提升日语水平。",
  },
  {
    id: 4,
    name: "德语课程",
    icon: "🇩🇪",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    features: [
      "德籍教师授课",
      "歌德证书考试辅导",
      "商务德语培训",
      "留学申请指导",
    ],
    description: "专业的德语培训，为您的留学深造打下坚实基础。",
  },
  {
    id: 5,
    name: "IT技术课程",
    icon: "💻",
    levels: ["基础班", "进阶班", "高级班"],
    features: [
      "全栈开发培训",
      "项目实战经验",
      "就业指导服务",
      "企业内训定制",
    ],
    description: "紧跟技术潮流，培养全方位IT人才。",
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            精品课程设置
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600"
          >
            为您提供专业的语言培训和IT技术教育
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {courses.map((course) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: course.id * 0.1 }}
              className="flex flex-col items-start bg-white rounded-lg shadow-lg p-6"
            >
              <div className="w-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-4xl">{course.icon}</span>
                  <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                    {course.name}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">{course.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">课程等级</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {course.levels.map((level) => (
                      <span
                        key={level}
                        className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">课程特色</h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                    {course.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-4">
                    添加客服微信，了解更多课程详情和优惠信息
                  </p>
                  <ConsultButton />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 