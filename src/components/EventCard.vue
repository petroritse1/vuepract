<script setup>
 

defineProps({
     event:{
        type:Object,
        required:true,
     }
})
 
</script>

<template>
     <RouterLink :to="{name:'event-details',params:{id:event.id}}">

        <div class="event-card">
             <h3> {{ event.title }} </h3>
             <p>a text</p>
             <span>@{{ event.time }} on {{ event.date }}</span>
             
        </div>
    </RouterLink>
</template>

<style>
.event-card{
    padding: 20px;
    width:250px;
    cursor:pointer;
    border:2px solid #39495c;
    margin-bottom:18px;
}
.event-card:hover{

    transform:scale(1.02);
    box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2)
}
</style>