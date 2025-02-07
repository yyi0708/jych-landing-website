<template>
  <section id="section-home" class="bg-white dark:bg-gray-900">
    <div
      class="max-w-screen-2xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
    >
      <div class="mr-auto place-self-center">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
        >
          {{ t("baseInfo.title1") }}
        </h1>
        <h2 class="pl-8 text-xl md:text-2xl dark:text-white">
          {{ t("baseInfo.title2") }}
        </h2>

        <p
          v-html="t('baseInfo.desc')"
          class="w-4/5 pl-8 mt-6 mb-8 font-light leading-relaxed text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200"
        ></p>

        <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center">
          <a
            href="https://limit-pc.20133075.xyz/link/JMH2ZAfLAaqwJtNBPro3K4UfVi3vZ6NDps8ByUAooe7MQHf2E2JtdY8xkReb9RZ8DaZOzwKtHSE16HvhkRi2rL"
            target="_blank"
            class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              viewBox="0 0 16 16"
            >
              <path
                fill="#7c3aed"
                d="M10.9 0c.144.973-.254 1.92-.779 2.6c-.562.721-1.53 1.28-2.47 1.25c-.171-.931.268-1.89.8-2.53c.585-.712 1.59-1.26 2.45-1.32zm.4 4c1.07 0 2.2.583 3.01 1.59c-2.65 1.45-2.22 5.23.458 6.24q-.418.998-1.02 1.9c-.661 1.01-1.59 2.26-2.75 2.27c-.476.004-.787-.138-1.12-.292c-.39-.178-.812-.371-1.56-.368c-.744.004-1.17.195-1.57.371c-.345.154-.663.295-1.14.291c-1.16-.01-2.04-1.14-2.7-2.15c-1.85-2.81-2.04-6.12-.903-7.87c.811-1.25 2.09-1.98 3.29-1.98c.641 0 1.16.184 1.65.36c.447.159.874.312 1.36.312c.446 0 .813-.139 1.21-.29c.481-.182 1.01-.382 1.78-.382z"
              />
            </svg>
            <span>Mac</span>
          </a>
          <a
            href="https://limit-pc.20133075.xyz/link/JMH2ZAfLAariuMZDxnmXztmDCiMXecATrfZrrYEk6M2eIntGfkNUwpsK7I0Jxxf7xDlDaNTCUGfaESD4siI249"
            target="_blank"
            class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0891b2"
                d="m3 5.549l7.195-.967v7.029l-7.188.054zm7.195 6.842v7.105l-7.19-.985v-6.12zm.918-7.935L20.998 3v8.533l-9.885.078zM21 12.505L20.998 21l-9.885-1.353v-7.142z"
              />
            </svg>
            <span>Windows</span>
          </a>
        </div>

        <img class="mx-auto my-10" :src="TabMore" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import TabMore from "@/assets/tab—more.png";

const { t } = useI18n();
</script>

<style scoped></style>
