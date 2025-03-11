/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 빌드 시 타입에러 패스하기
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
