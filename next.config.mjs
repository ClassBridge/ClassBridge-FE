/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ryojadvvjsbffbhuaaem.supabase.co",
        port: "",
        pathname: "/**",
      },
      //   {
      //     protocol: "https",
      //     hostname: "classbridge.s3.ap-northeast-2.amazonaws.com",
      //     port: "",
      //     pathname: "/**",
      //   },
    ],
  },
  //   async headers() {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         headers: [
  //           { key: "Access-Control-Allow-Credentials", value: "true" },
  //           {
  //             key: "Access-Control-Allow-Origin",
  //             value: process.env.ALLOWED_ORIGIN,
  //           },
  //           {
  //             key: "Access-Control-Allow-Methods",
  //             value: "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  //           },
  //           {
  //             key: "Access-Control-Allow-Headers",
  //             value: "Content-Type, access",
  //           },
  //         ],
  //       },
  //     ];
  //   },
};

export default nextConfig;
