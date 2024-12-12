"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const advantages = [
    {
      id: 1,
      title: "专业师资",
      description: "拥有来自多个国家的外籍教师和经验丰富的中国教师，确保教学质量。",
    },
    {
      id: 2,
      title: "个性化教学",
      description: "根据学员需求定制课程内容，小班教学确保每位学员得到充分关注。",
    },
    {
      id: 3,
      title: "优质环境",
      description: "教学环境舒适，配备先进的多媒体教学设备，为学习提供良好条件。",
    },
    {
      id: 4,
      title: "灵活课程",
      description: "提供线上线下结合的教学模式，满足不同学员的时间安排需求。",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            关于莘煜文化
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            西安莘煜文化成立于[年份]，是一家专注于语言培训和IT教育的综合性教育机构。
            我们致力于为学员提供优质的教育资源和专业的学习指导，帮助每一位学员实现自己的目标。
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {advantages.map((advantage) => (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: advantage.id * 0.1 }}
                className="flex flex-col bg-white rounded-lg shadow-lg p-6"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {advantage.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{advantage.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            企业愿景
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            成为西安地区最具影响力的语言培训和IT教育机构，为更多学员开启新的人生篇章。
          </p>
        </motion.div>
      </div>
    </div>
  );
} 