import localFont from "next/font/local";
export const InriaSerif = localFont({
    src: [
        {
            // path: "../../public/fonts/InriaSerif-Light.ttf",
            path: "../../public/fonts/InriaSerif-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/InriaSerif-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/InriaSerif-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-InriaSerif",
});