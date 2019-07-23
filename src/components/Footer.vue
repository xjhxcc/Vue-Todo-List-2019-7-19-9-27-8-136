<template>
    <div id="Footer">
        <ul>
            <li>
                <a @click="displayAll">All</a>
            </li>
            <li>
                <a @click="filterActive">Active</a>
            </li>
            <li>
                <a @click="filterComplete">Complete</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods:{
        filterActive(){
            this.$store.commit('changeActiveButton', 'ACTIVE')
        },
        filterComplete(){
            this.$store.commit('changeActiveButton', "COMPLETE")
        },
        displayAll(){
            this.$store.commit('changeActiveButton', "ALL")
        }
    }
    
}
</script>