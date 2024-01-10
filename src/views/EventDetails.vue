<script setup>
import {ref,onMounted} from "vue"
import EventService  from "@/services/EventServices";

const props = defineProps({
    id:{
        required:true,
    },
})

const event = ref(null)
 

onMounted(()=>{
    EventService.getEvent(props.id).then((response) => {
        event.value = response.data
        
    }).catch((error)=>{
        console.log(error)
    })
})

</script>

<template>
    <div  v-if="event" class="event-card">
        <h3> {{ event.title }} </h3>
        <p> {{  event.time }} on {{ event.date }} @ {{event.location}}</p>
        <p> {{ event.description }}</p>
         
    </div>
</template>