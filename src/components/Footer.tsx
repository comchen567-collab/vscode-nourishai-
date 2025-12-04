import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F5F7] text-gray-500 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">NourishAI</h3>
            <p className="text-xs leading-5">
              基于人工智能的多维健康数据整合与膳食推荐系统。<br/>
              从“碳水焦虑”走向“精准营养”。
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">链接</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:underline">关于团队</a></li>
              <li><a href="#" className="hover:underline">商业计划书</a></li>
              <li><a href="#" className="hover:underline">隐私政策</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">联系</h3>
            <p className="text-xs">北京市海淀区</p>
            <p className="text-xs">support@nourishai.com</p>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-xs text-center">
          &copy; {new Date().getFullYear()} NourishAI Team. All rights reserved. 
          <span className="ml-2">负责人：陈超燃</span>
        </div>
      </div>
    </footer>
  );
};