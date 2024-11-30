<template>
  <div class="flex-1">
    <main id="app" class="px-10">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl text-[#1F2937] font-semibold">Мои проекты</h1>

        <NuxtLink to="/projects/new-project">
          <button
            class="px-3 py-2 text-base text-white font-semibold bg-[#2563EB] rounded-lg"
          >
            Создать новый
          </button>
        </NuxtLink>
      </div>

      <div class="flex gap-x-5 gap-y-10 items-center flex-wrap mt-10">
        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
          >
            <div class="w-full max-h-[200px] z-0">
              <img
                class="w-full rounded-t-lg object-fill"
                src="/images/project__bg.png"
                alt="иллюстрационная картинка"
              />
            </div>
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
          >
            <div class="w-full max-h-[200px] z-0">
              <img
                class="w-full rounded-t-lg object-fill"
                src="/images/project__bg.png"
                alt="иллюстрационная картинка"
              />
            </div>
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
          >
            <div class="w-full max-h-[200px] z-0">
              <img
                class="w-full rounded-t-lg object-fill"
                src="/images/project__bg.png"
                alt="иллюстрационная картинка"
              />
            </div>
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="/projects/project" class="w-[32.354%]">
          <article
            class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
          >
            <div class="w-full max-h-[200px] z-0">
              <img
                class="w-full rounded-t-lg object-fill"
                src="/images/project__bg.png"
                alt="иллюстрационная картинка"
              />
            </div>
            <div
              class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
            >
              <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
              <p class="text-base text-[#6B7280] font-medium">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="text-sm text-[#6B7280] font-semibold">
                Last updated 5 mins ago
              </p>
            </div>
          </article>
        </NuxtLink>
      </div>

      <div class="mt-[60px]">
        <h2 class="text-2xl text-[#1F2937] font-bold">Завершенные проекты</h2>

        <div class="flex gap-x-5 gap-y-10 items-center flex-wrap mt-10">
          <NuxtLink to="/projects/project" class="w-[32.354%]">
            <article
              class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
            >
              <div class="w-full max-h-[200px] z-0">
                <img
                  class="w-full rounded-t-lg object-fill"
                  src="/images/project__bg.png"
                  alt="иллюстрационная картинка"
                />
              </div>
              <div
                class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
              >
                <h2 class="text-lg text-[#1F2937] font-bold">Проект 1</h2>
                <p class="text-base text-[#6B7280] font-medium">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="text-sm text-[#6B7280] font-semibold">
                  Last updated 5 mins ago
                </p>
              </div>
            </article>
          </NuxtLink>

          <NuxtLink to="/projects/project" class="w-[32.354%]">
            <article
              class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
            >
              <div class="w-full max-h-[200px] z-0">
                <img
                  class="w-full rounded-t-lg object-fill"
                  src="/images/project__bg.png"
                  alt="иллюстрационная картинка"
                />
              </div>
              <div
                class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
              >
                <h2 class="text-lg text-[#1F2937] font-bold">Проект 2</h2>
                <p class="text-base text-[#6B7280] font-medium">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="text-sm text-[#6B7280] font-semibold">
                  Last updated 5 mins ago
                </p>
              </div>
            </article>
          </NuxtLink>

          <NuxtLink to="/projects/project" class="w-[32.354%]">
            <article
              class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
            >
              <div class="w-full max-h-[200px] z-0">
                <img
                  class="w-full rounded-t-lg object-fill"
                  src="/images/project__bg.png"
                  alt="иллюстрационная картинка"
                />
              </div>
              <div
                class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
              >
                <h2 class="text-lg text-[#1F2937] font-bold">Проект 3</h2>
                <p class="text-base text-[#6B7280] font-medium">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="text-sm text-[#6B7280] font-semibold">
                  Last updated 5 mins ago
                </p>
              </div>
            </article>
          </NuxtLink>

          <NuxtLink to="/projects/project" class="w-[32.354%]">
            <article
              class="w-full max-h-[362px] border border-solid border-[#E5E7EB] rounded-lg shadow-sm"
            >
              <div class="w-full max-h-[200px] z-0">
                <img
                  class="w-full rounded-t-lg object-fill"
                  src="/images/project__bg.png"
                  alt="иллюстрационная картинка"
                />
              </div>
              <div
                class="w-full flex flex-col gap-y-4 h-fit p-5 bg-white rounded-b-lg"
              >
                <h2 class="text-lg text-[#1F2937] font-bold">Проект 4</h2>
                <p class="text-base text-[#6B7280] font-medium">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="text-sm text-[#6B7280] font-semibold">
                  Last updated 5 mins ago
                </p>
              </div>
            </article>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
