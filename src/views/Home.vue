<template>
  <div class="py-16 px-4 sm:px-0">
    <div class="container mx-auto">
      <h1 class="font-bold text-3xl text-gray-700 mb-8">Events</h1>
      <section v-if="!isEventsLoading" class="flex flex-wrap -mx-4">
        <div v-for="event in events" :key="event.id" class="w-full sm:1/2 md:w-1/3 lg:w-1/4 p-4">
          <EventCard v-bind="eventCardAdaptor(event)"/>
        </div>
      </section>
      <section v-else class="py-20">
        <loading />
      </section>
      <Btn
        v-if="!isEventsLoading && totalEvents >  events.length"
        :title="'Show more'"
        :isLoading="isMoreEventsLoading"
        @onClick="fetchMoreEvents"
      />
      <p class="text-center text-sm text-gray-400 mt-2">Showing {{ events.length }} of {{ totalEvents }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventCard from '@/components/events/EventCard.vue';
import Loading from '@/components/shared/Loading.vue'
import Btn from '@/components/shared/Btn.vue'
export default {
  name: 'Home',
  components: { EventCard, Loading, Btn },
  computed: {
    ...mapGetters('event',['events','totalEvents','isEventsLoading','isMoreEventsLoading'])
  },
  mounted(){
    this.fetchEvents()
  },
  methods: {
    ...mapActions('event',['fetchEvents', 'fetchMoreEvents']),
    eventCardAdaptor(event){
      return {
        id: event.id,
        title: event.position?.name ?? '',
        color: event.position?.color ?? '',
        startString: event.startsAt ?? '',
        endString: event.endsAt ?? ''
      }
    }
  }
}
</script>
