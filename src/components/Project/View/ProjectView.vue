<template>
    <div>
        <div class="flex-1 min-w-0 flex flex-col bg-white">
            <div class="flex-shrink-0 border-b-2 border-gray-200">
                <header class="px-6">
                    <div class="flex justify-between items-center border-gray-200 py-3">
                        <div class="flex-1 flex">
                            <div class="ml-3 relative w-64 lg:ml-0">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                    <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            d="M11.508 19.479a8 8 0 100-16 8 8 0 000 16zM21.508 21.478l-4.35-4.35"
                                        />
                                    </svg>
                                </span>
                                <input
                                    placeholder="Search"
                                    class="rounded-md border border-gray-400 pl-12 pr-4 py-3 text-sm leading-tight placeholder-gray-600 text-gray-900"
                                >
                            </div>
                        </div>

                        <div class="flex items-center">
                            <button>
                                <svg class="text-gray-600" width="25" height="25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.62 8.05a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9zM14.35 21.05a1.999 1.999 0 01-3.46 0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </button>
                            <button class="ml-6">
                                <img
                                    class="h-8 w-8 rounded-full object-cover"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                                    alt="profile"
                                >
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between py-2">
                        <div class="flex items-center">
                            <h2 class="text-2xl font-semibold text-gray-900 leading-tight">All Issues</h2>

                            <div class="ml-6 flex flex-center">
                                <span class="-ml-2 rounded-full border-2 border-white">
                                    <img
                                        class="h-6 w-6 rounded-full object-cover"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                                        alt="avatar1"
                                    >
                                </span>
                            </div>
                        </div>

                        <!-- all issue and avatar ends -->
                        <div class="flex">
                            <button
                                class="ml-3 flex items-center justify-between text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                            >
                                <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        d="M12.279 5.333v14M5.279 12.334h14"
                                    />
                                </svg>
                                <span class="text-sm text-gray-200">New Issue</span>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
            <!-- header components ends -->
            <div class="flex-1 overflow-auto">
                <main class="p-3 h-full inline-flex">
                    <div class="ml-4 flex-shrink-0 flex flex-col w-36 bg-gray-100 rounded-md">
                        <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-900">Backlog</h3>
                        <div class="flex-1 min-h-0 overflow-y-auto">
                            <ul class="pt-1 pb-3 px-3">
                                <li class="mt-3">
                                    <a href="#" class="block p-5 bg-white rounded-md shadow">
                                        <div class="flex justify-between">
                                            <p class="text-sm font-medium leading-snug text-gray-900">
                                                Add discount code to checkout page.
                                            </p>
                                            <img
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                                                alt="avatar"
                                                class="h-5 w-5 rounded-full"
                                            >
                                        </div>
                                        <div class="flex justify-between mt-5">
                                            <div class="text-sm text-gray-600">
                                                <time datetime="2020-10-12">Sep 15</time>
                                            </div>
                                            <div>
                                                <span class="inline-flex items-center leading-tight bg-teal-100 px-2 py-1 rounded-full">
                                                    <svg class="h-2 w-2" viewBox="0 0 8 8" fill="#00bfa5">
                                                        <circle cx="4" cy="4" r="3"/>
                                                    </svg>
                                                    <span class="text-sm font-medium text-teal-500 rounded-full ml-1">Feature Request</span>
                                              </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ProjectView',
    };
</script>

<style scoped>

</style>
