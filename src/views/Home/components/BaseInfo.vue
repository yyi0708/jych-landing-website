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

        <div
          class="my-12 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center"
        >
          <div
            @click="clickBtn('chrome')"
            class="relative inline-flex items-center justify-center gap-4 group"
          >
            <div
              class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
            ></div>
            <a
              role="button"
              class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
              title="payment"
              href="#"
            >
              {{ t("extra.chrome") }}
              <svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                <path
                  d="M0 5h7"
                  class="transition opacity-0 group-hover:opacity-100"
                ></path>
                <path
                  d="M1 1l4 4-4 4"
                  class="transition group-hover:translate-x-[3px]"
                ></path>
              </svg>
            </a>
          </div>

          <div
            @click="clickBtn('edge')"
            class="relative inline-flex items-center justify-center gap-4 group"
          >
            <div
              class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
            ></div>
            <a
              role="button"
              class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
              title="payment"
              href="#"
            >
              {{ t("extra.edge") }}
              <svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                <path
                  d="M0 5h7"
                  class="transition opacity-0 group-hover:opacity-100"
                ></path>
                <path
                  d="M1 1l4 4-4 4"
                  class="transition group-hover:translate-x-[3px]"
                ></path>
              </svg>
            </a>
          </div>

          <div class="flex justify-center items-center gap-12 h-full">
            <div
              class="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]"
            >
              <button
                @click="clickBtn('file')"
                class="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]"
              >
                <div
                  class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2"
                >
                  <div class="flex gap-2 items-center">
                    <span class="font-semibold">{{ t("extra.file") }}</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
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

// click event
function clickBtn(type) {
  if (type === "file") {
    return window.open(
      "https://github.com/yyi0708/jych-landing-website/releases/download/v0.1.7/jych.-0.1.7.zip",
      "_self"
    );
  }

  window.alert(`${type} plugin, Coming soon...`);
}
</script>

<style scoped></style>
