"use client";

import Link from "next/link";

export default function Footer() {
  const navigation = {
    solutions: [
      { name: "英语课程", href: "/courses" },
      { name: "法语课程", href: "/courses" },
      { name: "日语课程", href: "/courses" },
      { name: "德语课程", href: "/courses" },
      { name: "IT课程", href: "/courses" },
    ],
    support: [
      { name: "关于我们", href: "/about" },
      { name: "师资力量", href: "/teachers" },
      { name: "联系我们", href: "/contact" },
    ],
    company: [
      { name: "地址：西安市雁塔区罗曼公馆2-3-102", href: "#" },
      { name: "电话：157-0293-9193", href: "tel:15702939193" },
      { name: "邮箱：565678150@qq.com", href: "mailto:565678150@qq.com" },
    ],
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">莘煜文化</h3>
            <p className="text-sm leading-6 text-gray-300">
              专业的语言培训与IT教育机构
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">课程设置</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">关于我们</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">联系方式</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} 西安莘煜文化. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 