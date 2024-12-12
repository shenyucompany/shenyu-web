"use client";

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

export default function ConsultButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        立即咨询
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">
              扫码添加客服微信
            </Dialog.Title>
            <div className="mt-2">
              <Image
                src="/images/qrcode.png"
                alt="客服微信二维码"
                width={200}
                height={200}
                className="mx-auto"
              />
              <p className="text-sm text-gray-500 mt-4 text-center">
                请扫描上方二维码添加客服微信，获取更多课程信息
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                关闭
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
} 