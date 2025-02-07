<template>
  <!-- 功能介绍 -->
  <section id="section-details" class="bg-white dark:bg-gray-900">
    <div
      class="max-w-screen-2xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
    >
      <!-- Row -->
      <div
        data-aos="fade-up"
        class="items-center justify-between mb-6 grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16"
      >
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {{ t("detail.matting.title") }}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {{ t("detail.matting.desc") }}
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.matting.feature1") }}
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.matting.feature2") }}
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.matting.feature3") }}
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.matting.feature4") }}
              </span>
            </li>
          </ul>
        </div>

        <div class="col-span-2 mb-4 rounded-lg">
          <Splide :options="options">
            <SplideSlide v-for="(img, index) in newTabImg" :key="index">
              <img :src="img" class="h-full w-full object-cover" />
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <!-- row -->
      <div
        data-aos="fade-up"
        class="items-center mb-6 gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
      >
        <div class="w-full mb-4 rounded-lg lg:mb-0 lg:flex">
          <Splide :options="options">
            <SplideSlide v-for="(img, index) in taboxImg" :key="index">
              <img :src="img" class="h-full w-full object-cover" />
            </SplideSlide>
          </Splide>
        </div>

        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {{ t("detail.certificate.title") }}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {{ t("detail.certificate.desc") }}
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.certificate.feature1") }}
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.certificate.feature2") }}
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.certificate.feature3") }}
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.certificate.feature4") }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Row -->
      <div
        data-aos="fade-up"
        class="items-center mb-6 gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
      >
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {{ t("detail.convert.title") }}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {{ t("detail.convert.desc") }}
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.convert.feature1") }}
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                {{ t("detail.convert.feature2") }}
              </span>
            </li>
          </ul>
        </div>

        <div class="w-full mb-4 rounded-lg lg:mb-0 lg:flex">
          <Splide :options="options">
            <SplideSlide v-for="(img, index) in toolImg" :key="index">
              <img :src="img" class="h-full w-full object-cover" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// https://gitee.com/yan_wen_ran/r-swiper
import { ref } from "vue";
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import newTab01 from "@/assets/swiper/new-tab_01.png";
import newTab02 from "@/assets/swiper/new-tab_02.png";
import newTab03 from "@/assets/swiper/new-tab_03.png";
import newTab04 from "@/assets/swiper/new-tab_04.png";

import tabox01 from "@/assets/swiper/tabox_01.png";
import tabox02 from "@/assets/swiper/tabox_02.png";
import tabox03 from "@/assets/swiper/tabox_03.png";

import tool01 from "@/assets/swiper/tool_01.png";

const options = {
  type: "fade",
  rewind: true,
  // perPage: 1,
  autoplay: false,
  padding: { top: "20%", bottom: "20%" }, // 设置左右内边距
};

// newTag
const newTabImg = [newTab01, newTab02, newTab03, newTab04];
// tabox
const taboxImg = [tabox01, tabox02, tabox03];
// tool
const toolImg = [tool01];
</script>

<style>
.splide__slide {
  border-radius: 1rem;
  overflow: hidden;
}
</style>
