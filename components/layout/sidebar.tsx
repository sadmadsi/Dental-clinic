import { Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Vazirmatn } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const inter = Vazirmatn({
  weight: "500",
  subsets: ["arabic"],
});

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  const router = useRouter();
  const menu = [
    {
      name: "خانه",
      url: "/",
    },
    {
      name: "تعرفه خدمات",
      url: "/tarrif",
    },
    {
      name: "خدمات",
      children: [
        {
          name: "درمانی",
          url: "/treatment",
        },
        {
          name: "اصلاح طرح لبخند",
          url: "/smile",
        },
        {
          name: "بلیچینگ",
          url: "/bleaching",
        },
        {
          name: "جراحی لثه و ایمپلنت",
          url: "/gum-surgery",
        },
      ],
    },
    {
      name: "فروشگاه",
      url: "/",
    },
    {
      name: "جشنواره‌ها",
      url: "/",
    },
    {
      name: "آدرس",
      url: "/",
    },
  ];

  const handleClickScroll = () => {
    const element = document.getElementById("location");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={twMerge("relative z-[1000]", inter.className)}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <button onClick={() => setOpen(false)}>
                        <Image
                          src={"/sort.svg"}
                          width={40}
                          height={40}
                          alt="logo"
                        />
                      </button>
                    </div>
                    <div className="relative mt-6 space-y-4 divide-y-2 flex-1 px-4 sm:px-6">
                      {menu.map((page: any) => {
                        if (page?.children) {
                          return (
                            <Disclosure key={page.name}>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="flex items-center justify-between pt-4 w-full text-right focus:outline-0">
                                    {page.name}
                                    <ChevronUpIcon
                                      className={`${
                                        open ? "rotate-180 transform" : ""
                                      } h-5 w-5 text-black`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="text-gray-500">
                                    {page.children.map((item: any) => {
                                      return (
                                        <div
                                          className="pt-4 cursor-pointer"
                                          key={item.name}
                                          onClick={() => router.push(item.url)}
                                        >
                                          {item.name}
                                        </div>
                                      );
                                    })}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          );
                        } else {
                          return (
                            <div
                              className="pt-4 cursor-pointer"
                              key={page.name}
                              onClick={() => {
                                setOpen(false);
                                page.name === "آدرس"
                                  ? handleClickScroll()
                                  : router.push(page.url);
                              }}
                            >
                              {page.name}
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
