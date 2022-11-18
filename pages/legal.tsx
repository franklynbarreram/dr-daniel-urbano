import { Tab } from "@headlessui/react";
import Head from "next/head";
import React from "react";
import { itemsTab, TabsProps } from "../helper/items-tab.helper";
import { siteTitle } from "../helper/site-title.helper";

const Legal = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} - Legal</title>
      </Head>

      <main className="mt-8">
        <Tab.Group>
          <Tab.List className="px-3 ">
            <div className=" bg-gray-100 rounded-lg md:rounded-full">
              {itemsTab.map((item: TabsProps) => (
                <Tab
                  key={item.id}
                  className="w-full md:w-auto ui-selected:custom-gradient outline-none ui-selected:text-white ui-not-selected:bg-transparent ui-not-selected:text-black py-4 px-7 rounded-full font-medium"
                >
                  {item.tab}
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels>
            {itemsTab.map((item: TabsProps) => (
              <Tab.Panel key={item.id} className="">
                {item.content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  );
};

export default Legal;
