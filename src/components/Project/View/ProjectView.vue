<template>
    <div>
        <div class="flex-1 min-w-0 flex flex-col bg-white">
            <b-breadcrumb :items="breadcrumb"/>
            <div class="flex-shrink-0 border-b-2 border-gray-200">
                <header class="px-6">
                    <div class="flex items-center justify-between py-2">
                        <div class="flex items-center">
                            <h2 class="text-2xl font-semibold text-gray-900 leading-tight">All Issues</h2>
                        </div>

                        <div class="flex">
                            <button
                                class="ml-3 flex items-center justify-between text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                            >
                                <font-awesome-icon class="mr-2" icon="plus"/>
                                <span class="text-sm text-gray-200">New Issue</span>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
            <task-list/>
        </div>
    </div>

</template>

<script>
    import TaskList from '../../Task/List/TaskList';

    export default {
        name: 'ProjectView',
        components: {
            TaskList
        },
        data() {
            return {
                breadcrumb: [
                    {
                        text: 'Dasboard',
                        href: '#'
                    },
                    {
                        text: 'Project',
                        active: true
                    }
                ]
            };
        }
    };
</script>

<style scoped>

</style>
