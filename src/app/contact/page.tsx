"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import ConsultButton from "@/components/common/ConsultButton";

export default function ContactPage() {
  const contactInfo = [
    {
      id: 1,
      icon: MapPinIcon,
      title: "地址",
      content: "西安市雁塔区罗曼公馆2-3-102",
      description: "地铁3号线胡家庙站B出口步行5分钟",
    },
    {
      id: 2,
      icon: PhoneIcon,
      title: "电话",
      content: "157-0293-9193",
      description: "周一至周日 9:00-21:00",
    },
    {
      id: 3,
      icon: EnvelopeIcon,
      title: "邮箱",
      content: "565678150@qq.com",
      description: "我们会在24小时内回复您的邮件",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            联系我们
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600"
          >
            如果您有任何问题，欢迎随时与我们联系
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.id * 0.1 }}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <item.icon className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-base text-gray-600">{item.content}</p>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">在线咨询</h3>
            <p className="mt-2 text-gray-600">
              扫描下方二维码添加客服微信，获取更多课程信息
            </p>
          </div>
          <ConsultButton />
        </motion.div>
      </div>
    </div>
  );
} 