<script setup>
import {ref,onMounted} from "vue"
import axios from "axios"
import EventService from "@/services/EventServices.js"


const event = ref(null)   


onMounted(()=>{
    EventService.getEvents().then((response) => {
         event.value = response.data
    }).catch((error)=>{
        console.log(error)
    })
})


import EventCard from "@/components/EventCard.vue"


</script>

<template>
       <div class="home">
     
            <EventCard  :event="ev" v-for="ev in event" :key="ev.id"/>
       </div>
</template>


