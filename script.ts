import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Enable logs

// const prisma = new PrismaClient({
//   log: ["query"],
// });

async function main() {
  // .... you will write your Prisma Client queries here

  //   // Creating
  //   await prisma.user.deleteMany();
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "mateo",
  //       age: 0,
  //       email: "mateo@prisma.com",
  //       userPreference: {
  //         create: {
  //           emailUpdates: true,
  //         },
  //       },
  //     },
  //     // include: {
  //     //   userPreference: true,
  //     // },
  //     // select: {
  //     //   name: true,
  //     //   userPreference: true,
  //     // },
  //     select: {
  //       name: true,
  //       userPreference: {
  //         select: {
  //           id: true,
  //         },
  //       },
  //     },
  //   });

  //   // Create many sample
  //   const user = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "nelson",
  //         age: 10,
  //         email: "nelson1@prisma.com",
  //       },
  //       {
  //         name: "nelson",
  //         age: 30,
  //         email: "nelson2@prisma.com",
  //       },
  //       {
  //         name: "nelson",
  //         age: 15,
  //         email: "nelson3@prisma.com",
  //       },
  //     ],
  //   });

  //// Search unique

  //   const user = await prisma.user.findUnique({
  //     where: {
  //       //   email: "mateo@prisma.com",
  //       age_name: {
  //         age: 0,
  //         name: "mateo",
  //       },
  //     },
  //   });

  //   const user = await prisma.user.findFirst({
  //     where: {
  //       //   email: "mateo@prisma.com",
  //       name: "mateo",
  //     },
  //   });

  //   // Search for many

  //   const user = await prisma.user.findMany({
  //     where: {
  //       //   email: "mateo@prisma.com",
  //       //   email: {
  //       //     // contains: "@prisma.com",
  //       //     // startsWith: "@prisma.com",
  //       //     // startsWith: "nel",
  //       //     endsWith: ".com",
  //       //   },
  //       //   name: "nelson",
  //       //   name: {
  //       //     // equals: "nelson",
  //       //     // not: "nelson",
  //       //     // in: ["mateo", "cheryl"],
  //       //     notIn: ["nelson"],
  //       //   },
  //       //   age: {
  //       //     // lt: 10,
  //       //     gt: 10,
  //       //   },
  //       AND: [
  //         {
  //           name: {
  //             startsWith: "nels",
  //           },
  //         },
  //         {
  //           age: {
  //             gt: 10,
  //           },
  //         },
  //       ],
  //     },
  //     // distinct: ["name"],
  //     // orderBy: {
  //     //   age: "desc",
  //     // },
  //     // take: 2,
  //     // skip: 1,
  //   });

  const user = await prisma.user.update({
    where: {
      email: "nelson1@prisma.com",
    },
    data: {
      email: "nelson1@gmail.com",
    },
  });

  console.log("🚀 ~ file: script.ts:10 ~ main ~ user:", user);
  //   console.log("🚀 ~ file: script.ts:10 ~ main ~ user.length:", user.length);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
