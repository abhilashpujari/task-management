<template>
    <div class="flex-1 overflow-auto">
        <main class="p-3 h-full inline-flex">
            <div class="ml-4 flex-shrink-0 flex flex-col w-36 bg-gray-100 rounded-md">
                <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-900">
                    Backlog
                </h3>
                <task-card/>
            </div>
        </main>
    </div>
</template>

<script>
    import TaskCard from './Partials/TaskCard';

    export default {
        name: 'TaskList',
        components: {
            TaskCard
        }
    };
</script>
