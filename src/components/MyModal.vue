<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-75" />
          </TransitionChild>
    
          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-700 p-6 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h1"
                    class="text-lg font-medium leading-6 text-gray-900 dark:text-slate-200"
                  >
                    About this Page
                  </DialogTitle>
                  <div class="mt-4 prose dark:text-slate-200">
                    <h1 class="mb-1 dark:text-slate-100">👋 Hi!</h1>
                    <p class="text-sm">This is a community-driven mapping project listing <span class="font-bold">NYC's bicycle repair stations</span> and a bit of information about their current state.</p>
                    <h2 class="mt-2 mb-1 dark:text-slate-100">So, what <em>is</em> a bike repair station?</h2>
                    <p class="text-sm">
                      Community bike repair stations typically include both a bike repair stand, an air pump, and an assortment of tools that can be used to make basic repairs to bicycles. They're located in publicly-accesible spaces, and are free to use &mdash; <em>for anyone!</em>
                    </p>
                    <h2 class="mt-2 mb-1 dark:text-slate-100">Want to pitch in?</h2>
                    <p class="text-sm">
                      Submit additional bike repair stations <a href="https://airtable.com/shrmvn9LahrCenMBO" target="__blank" class="text-orange-200">here</a>.
                    </p>
                    <p class="text-sm text-slate-300">Made with ❤️ by <a href="https://www.kevin-cole.com/" target="__blank" class="text-orange-200">Kevin</a> with <a href="https://astro.build/" target="__blank" class="text-orange-200">🚀 Astro</a> & <a href="https://vuejs.org/" class="text-orange-200">Vue</a>.</p>
                  </div>
                  <div class="mt-4">
                    <button
                      type="button"
                      class="w-full rounded-md border border-transparent bg-orange-100 dark:bg-orange-300 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      @click="closeModal"
                    >
                      Cool!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </template>
    
    <script setup>
      import { ref } from 'vue'
      import {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionRoot,
        TransitionChild
      } from '@headlessui/vue'
    
      const isOpen = ref(false)
    
      function setIsOpen(value) {
        isOpen.value = value
      }
    
      function openModal () {
        isOpen.value = true
      }
      function closeModal() {
        isOpen.value = false
      }
    
      defineExpose({
          openModal,
          closeModal
        })
    </script>