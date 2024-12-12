"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { teachers } from "@/components/layout/teachers";

export default function TeachersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 6;
  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  // 获取当前页面的教师数据
  const getCurrentTeachers = () => {
    const start = (currentPage - 1) * teachersPerPage;
    const end = start + teachersPerPage;
    return teachers.slice(start, end);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            优秀师资团队
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600"
          >
            汇集海内外优秀教师，为您提供专业的学习指导
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {getCurrentTeachers().map((teacher) => (
            <motion.article
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: teacher.id * 0.1 }}
              className="flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative w-full">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={400}
                  height={300}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-x-4">
                  <span className="text-sm text-indigo-600">{teacher.nationality}</span>
                  <span className="text-sm text-gray-600">{teacher.role}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  {teacher.name}
                </h3>
                <div className="mt-4 text-sm text-gray-600">
                  <p>学历：{teacher.education}</p>
                  <p>经验：{teacher.experience}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {teacher.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 分页控制 */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 