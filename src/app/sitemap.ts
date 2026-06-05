import { getAllBlogs } from "@/lib/mdx";
import { MetadataRoute } from "next";

export const revalidate = 3600;


const blogs = await getAllBlogs();

function getBiWeeklyDate(): Date {
  const now = new Date();
  const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000;

  return new Date(
    Math.floor(now.getTime() / twoWeeksInMs) * twoWeeksInMs
  );
}

const urls = [
  "/solutions/candidate/easy-evaluator",
  "/solutions/candidate/easy-facilitator",
  "/solutions/candidate/easy-scheduler",
  "/solutions/candidate/easy-reviewer",

  "/solutions/recruiter/easy-evaluator",
  "/solutions/recruiter/easy-facilitator",
  "/solutions/recruiter/easy-scheduler",
  "/solutions/recruiter/easy-predictor",

  "/solutions/employer/easy-calibrator",
  "/solutions/employer/easy-evaluator",
  "/solutions/employer/easy-explorer",
  "/solutions/employer/easy-facilitator",
  "/solutions/employer/easy-navigator",
  "/solutions/employer/easy-predictor",
  "/solutions/employer/easy-role-tracker",
];


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resourceRoutes: MetadataRoute.Sitemap = [
    {
      url: `${process.env.BASE_URL}/resources/blogs`,
      lastModified: getBiWeeklyDate(),
    },
    {
      url: `${process.env.BASE_URL}/resources/alignment-test`,
      lastModified: getBiWeeklyDate(),
    }, 
  ];

  const solutionRoutes: MetadataRoute.Sitemap = [];

  urls.forEach((url) => {
    solutionRoutes.push({
      url: `${process.env.BASE_URL}${url}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });



  const BI_WEEKLY_DATE = getBiWeeklyDate();


  blogs.forEach((b) => {
    const url = `${process.env.BASE_URL}/resources/blogs/${b.slug}`;
    resourceRoutes.push({
      url: url,
      lastModified: b.date,
    });
  });


  return [
    {
      url: `${process.env.BASE_URL}/home`,
      lastModified: BI_WEEKLY_DATE,
        changeFrequency: "monthly",
  priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/employers`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/candidates`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/recruiters`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/resources`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/pricing`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/Solutions`,
      lastModified: BI_WEEKLY_DATE,
    },
  

    ...resourceRoutes,
    ...solutionRoutes,
  ];
}


