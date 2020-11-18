<template>
    <b-modal
        ref="create-task-modal"
        @close="close">
        <template #modal-header-close>
            <font-awesome-icon class="mr-2" icon="times"/>
        </template>
        <template #modal-title>
            <h3>
                Create Issue
            </h3>
        </template>
        <div class="d-block">
            <form ref="createTaskForm">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control"/>
                </div>
            </form>
        </div>
        <template #modal-footer>
            <div class="text-right">
                <b-button class="mt-3" @click="close">
                    Cancel
                </b-button>
                <b-button class="mt-3" variant="primary" @click="close">
                    Add
                </b-button>
            </div>
        </template>
    </b-modal>
</template>

<script>
    export default {
        name: 'ModalCreateTask',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            show(newVal, oldVal) {
                if (newVal === true) {
                    this.showModal();
                }
            }
        },
        methods: {
            showModal() {
                this.$refs['create-task-modal'].show();
            },
            close() {
                this.$refs['create-task-modal'].hide();
                this.$emit('close');
            }
        }
    };
</script>
